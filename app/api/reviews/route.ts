import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
 type Review = {
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

export async function OPTIONS() {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    return new NextResponse(null, { headers });
}
export async function POST(req:NextRequest){
    try {
        const data = await req.json();
        const slug: string = data.name;


        const space_data = await prisma.space.findUnique({
            where: {
                spaceName: slug
            }
        });

        if (!space_data) {
            const response = NextResponse.json({
                message: "Space not found",
            });
            response.headers.set("Access-Control-Allow-Origin", "*");
            response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
            return response;
        }

        const space_id = space_data.id;
        const review_data = await prisma.$queryRaw<Review[]>`
            SELECT 
                "Review"."id",
                "Review".*,
                array_agg("Reviewimages".image) AS images
            FROM "Review"
            JOIN "Reviewimages" ON "Review".id = "Reviewimages"."reviewId"
            WHERE "Review"."spaceId" = ${space_id}
            AND "Review"."heart"='true'
            GROUP BY "Review"."id", "Review".*
            ORDER BY "Review"."id" DESC;
        `;

        if(review_data.length === 0){
            const response = NextResponse.json({
                msg: "Don't have any liked reviews",
            });
            response.headers.set("Access-Control-Allow-Origin", "*");
            response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
            return response;
        }

        const response = NextResponse.json({ msg: "successfull", review_data });






        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        return response;

    } catch (error) {
        console.error("Error parsing request body:", error);

        const response = NextResponse.json({ msg: "Error parsing request body" }, { status: 400 });
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        return response;

    }
}