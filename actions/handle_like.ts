"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function add_like(testimonial_id: number , heart:string) {

    console.log("\n\n console in handle like :" + testimonial_id);
    try {


        const review = heart;

        if (review) {

            const updatedHeart = review === 'true' ? 'false' : 'true';

            const update_heart = await prisma.review.update({
                where: {
                    id: testimonial_id
                },
                data: {
                    heart: updatedHeart
                },
                select: {
                    id: true,
                    heart: true
                }
            })

            console.log(review);
            console.log("\n\n" + JSON.stringify(update_heart));
            return {
                message: "successfully updated",
                heart: update_heart
            }

        }


        return {
            message: "testimonial not found"
        }
    } catch (e) {
        console.log("\n\n error in handle like.ts :" + e);
        return {
            message: "something is wrong",
            error: e
        }
    }
}