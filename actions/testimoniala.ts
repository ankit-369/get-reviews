"use server"
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { fromEnv } from "@aws-sdk/credential-providers";

export interface Review {
    id: number;
    spaceId: number;
    name?: string;
    email?: string;
    photo?: string;
    review?: string;
    star?: number;
    permission: string;
    heart: string;
    createdAt?: number;
    updatedAt?: number;
    images?: string[];
}

export interface GetTestimonialsResponse {
    review_data?: Review[];
    message?: string;
    space_image?: string;
}

const prisma = new PrismaClient();
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: fromEnv(),
})

async function getobjurl(key: any) {
    const command = new GetObjectCommand({
        Bucket: 'kudos-vault',
        Key: key,
    })
    const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
    return url;
}

export async function Get_testimonials(slug: string): Promise<GetTestimonialsResponse> {
    try {
        if (!slug) {
            return {
                review_data: [],
                message: "Slug is required",

            };

        }

        const space_data = await prisma.space.findUnique({
            where: {
                spaceName: slug
            }
        });

        if (!space_data) {
            return {
                review_data: [],
                message: "Space not found",
            };
        }

        const space_id = space_data.id;

        const main_space_image = space_data.image || "";

        const imageUrl = await getobjurl('user/createspace/' + main_space_image);

        const review_data = await prisma.$queryRaw<any[]>`
            SELECT 
                "Review"."id",
                "Review"."spaceId",
                "Review".*,
                array_agg("Reviewimages".image) AS images
            FROM "Review"
            LEFT JOIN "Reviewimages" ON "Review".id = "Reviewimages"."reviewId"
            WHERE "Review"."spaceId" = ${space_id}
            GROUP BY "Review"."id", "Review"."spaceId", "Review".*
            ORDER BY "Review"."id" DESC;
        `;

        if (review_data.length === 0) {
            return {
                space_image: imageUrl,
                review_data: [],
                message: "no testimonial submitted yet",
            };
        }

        async function getfullimageurl(imagename: string[]) {
            const img_urls: string[] = [];
            for (const img of imagename) {

                const imageurl = await getobjurl('coustomer/reviewimages/' + img);
                img_urls.push(imageurl);
            }
            return img_urls;
        }

        // Ensure review_data is a plain object
        const plainReviewData: Review[] = await Promise.all(
            review_data.map(async (item: any) => {
                let review_imageurls: string[] | undefined;
                if (item.images) {
                    const validImages = item.images.filter((image: null | undefined) => image !== null);
                    if (validImages.length) {
                        review_imageurls = await getfullimageurl(validImages);
                    }
                }
                let coustomer_image: string | undefined;
                if (item.photo) {
                    coustomer_image = await getobjurl('coustomer/images/' + item.photo);
                }
                return {

                    id: item.id,
                    spaceId: item.spaceId,
                    name: item.name,
                    email: item.email,
                    photo: coustomer_image,
                    review: item.review,
                    star: item.star,
                    permission: item.permission,
                    heart: item.heart,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    images: review_imageurls || []
                }
            }));

        // console.log("this is plane review data "+JSON.stringify(plainReviewData));

        return {
            review_data: plainReviewData,
            space_image: imageUrl
        };
        // throw new Error('Failed to create task haha')




    } catch (e) {
        console.error("Error processing request in testimonial.ts :", e);
        return {
            review_data: [],
            message: "Invalid request"
        };

    }
}
