"use server"
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export interface Review {
    id: number;
    spaceId: number;
    name?: string;
    email?: string;
    photo?: string;
    review?: string;
    star?: number;
    permission: string;
    heart:string;
    createdAt?: number;
    updatedAt?: number;
    images?: string[];
}

export interface GetTestimonialsResponse {
    review_data?: Review[];
    message?: string;
    space_image? : string;
}

const prisma = new PrismaClient();

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

        const review_data = await prisma.$queryRaw<any[]>`
            SELECT 
                "Review"."id",
                "Review"."spaceId",
                "Review".*,
                array_agg("Reviewimages".image) AS images
            FROM "Review"
            JOIN "Reviewimages" ON "Review".id = "Reviewimages"."reviewId"
            WHERE "Review"."spaceId" = ${space_id}
            GROUP BY "Review"."id", "Review"."spaceId", "Review".*
            ORDER BY "Review"."id" DESC;
        `;

        
        
        // Ensure review_data is a plain object
        const plainReviewData: Review[] = review_data.map((item: any) => ({
            id: item.id,
            spaceId: item.spaceId,
            name: item.name,
            email: item.email,
            photo: item.photo,
            review: item.review,
            star: item.star,
            permission: item.permission,
            heart: item.heart,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            images: item.images || []
        }));

        

        return {
            review_data: plainReviewData,
            space_image: main_space_image
        };
        // throw new Error('Failed to create task haha')


        

    } catch (e) {
        console.error("Error processing request in testimonial.ts :", e);
        return{
            review_data: [],
            message: "Invalid request"
        };

    }
}
