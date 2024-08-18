"use server"

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PrismaClient } from "@prisma/client"

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
    const url = await getSignedUrl(s3Client, command, { expiresIn: 10 });
    return url;
}

export async function Formdata(slug:string){

    if(!slug){
        return {
            msg:"slug is required"
        }
    }

    const formdata = await prisma.space.findUnique({
        where: {
            spaceName: slug
        },
        select: {
            id: true,
            spaceName: true,
            title: true,
            description: true,
            question1: true,
            question2: true,
            question3: true,
            theme: true,
            collectionType: true,
            image: true // Keep the image field as it is
        }
    })

    if (!formdata) {
        return {
            msg:"space not found"
        }
    }
    
    let imageUrl: string | null = null;
    
    if (formdata.image) {
        imageUrl = await getobjurl('user/createspace/' + formdata.image);
    }
    const formdataWithLogo = formdata ? { ...formdata, logo: imageUrl } : null;
    console.log("\n\n inside testimonial  " + formdata);

    return {
         ...formdataWithLogo // Include signed URL in the response
    }

}
