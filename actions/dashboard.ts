"use server"
import { Next_Auth } from "@/app/lib/auth";
import  { RedisClient } from "@/app/lib/redis";
import { PrismaClient, Theme, CollectionType } from "@prisma/client";
import { getServerSession } from "next-auth/next";

export interface UserSpace {
    id: number;
    userId: number;
    spaceName: string;
    title: string | null;
    description: string | null;
    image: string | null;
    question1: string | null;
    question2: string | null;
    question3: string | null;
    theme: Theme;
    collectionType: CollectionType;
    createdAt: Number | null;
    updatedAt: Number | null;
}

const prisma = new PrismaClient();





export async function getspaces(): Promise<UserSpace[]> {
    // const client = await RedisClient();
    

    try {
        const session = await getServerSession(Next_Auth);

        if (!session) {
            console.error("No session found");
            return [];
        }

        
        const spaces = await prisma.space.findMany({
            where: {
                userId: Number(session.user.id) || undefined,
            },
        });
        
        // console.log("\n\n inside dashboard.ts " + JSON.stringify(spaces));

        // const res25 = await client.json.set(
        //     "ankitt", "$", spaces
        //   );
        //   const res2 = await client.json.get("ankitt");

        //   console.log("\n dashboard.ts res2 "+JSON.stringify(res2));
        
        //   const spaces: UserSpace[] = Array.isArray(res2)
        //   ? res2.map((item: any) => ({
        //       id: item.id,
        //       userId: item.userId,
        //       spaceName: item.spaceName,
        //       title: item.title ?? null,
        //       description: item.description ?? null,
        //       image: item.image ?? null,
        //       question1: item.question1 ?? null,
        //       question2: item.question2 ?? null,
        //       question3: item.question3 ?? null,
        //       theme: item.theme ?? "default" as Theme, // Adjust according to your Theme type
        //       collectionType: item.collectionType ?? "default" as CollectionType, // Adjust according to your CollectionType type
        //       createdAt: item.createdAt ?? null,
        //       updatedAt: item.updatedAt ?? null
        //   }))
        //   : [];

        return spaces;



    } catch (error) {
        console.error("Error fetching space names: ", error);
        return [];
    } 
}
