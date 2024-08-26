import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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
    const url = await getSignedUrl(s3Client, command, { expiresIn: 30 });
    return url;
}
type Review = {
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
};

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const addCorsHeaders = (response: NextResponse) => {
    Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });
    return response;
};

export async function OPTIONS() {
    return addCorsHeaders(new NextResponse(null));
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const slug: string = data.name;

        const space_data = await prisma.space.findUnique({
            where: {
                spaceName: slug
            }
        });

        if (!space_data) {
            return addCorsHeaders(
                NextResponse.json({ message: "Space not found" })
            );
        }

        const space_id = space_data.id;
        const review_data = await prisma.$queryRaw<Review[]>`
            SELECT 
                "Review"."id",
                "Review".*,
                array_agg("Reviewimages".image) AS images
            FROM "Review"
            LEFT JOIN "Reviewimages" ON "Review".id = "Reviewimages"."reviewId"
            WHERE "Review"."spaceId" = ${space_id}
            AND "Review"."heart"='true'
            GROUP BY "Review"."id", "Review".*
            ORDER BY "Review"."id" DESC;
        `;
console.log(review_data);
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
                let review_imageurls:string[] = [];
                if(item.images){
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
                    images: review_imageurls || []
                }
            }));

        if (review_data.length === 0) {
            return addCorsHeaders(
                NextResponse.json({ msg: "Don't have any liked reviews" })
            );
        }

        return addCorsHeaders(
            NextResponse.json({ msg: "successful", plainReviewData })
        );

    } catch (error) {
        console.error("Error parsing request body:", error);
        return addCorsHeaders(
            NextResponse.json({ msg: "Error parsing request body" }, { status: 400 })
        );
    }
}
