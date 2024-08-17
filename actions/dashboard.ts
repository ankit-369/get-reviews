"use server"
import { Next_Auth } from "@/app/lib/auth";
import  { RedisClient } from "@/app/lib/redis";
import { PrismaClient, Theme, CollectionType } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { fromEnv } from "@aws-sdk/credential-providers";

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

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials:fromEnv(),
  })
  
  async function getobjurl(key: any){
    const command = new GetObjectCommand({
      Bucket:'kudos-vault',
      Key:key,
    })
    const url =await getSignedUrl(s3Client , command,  { expiresIn: 10 });
    return url;
  }
  



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
        
        console.log("\n\n inside dashboard.ts " + JSON.stringify(spaces));

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

        const spacesWithUrls: UserSpace[] = await Promise.all(
            spaces.map(async (space) => {
              if (space.image) {
                try {
                  const imageUrl = await getobjurl('user/createspace/'+space.image);
                  return { ...space, image: imageUrl };
                } catch (error) {
                  console.error(`Error getting signed URL for image ${space.image}:`, error);
                  return space; // Return space without the image URL if there's an error
                }
              }
              return space;
            })
          );
        
          return spacesWithUrls;
        // return spaces;



    } catch (error) {
        console.error("Error fetching space names: ", error);
        return [];
    } 
}
