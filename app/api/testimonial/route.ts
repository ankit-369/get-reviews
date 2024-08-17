import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { fromEnv } from "@aws-sdk/credential-providers";


const prisma = new PrismaClient()
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

export async function POST(req: NextRequest) {

    try {

        const body = await req.json();
        console.log("\nn\inside testimonial      " + body.data)
        const slug = decodeURIComponent(body.data);
        const frontenddata = await prisma.space.findUnique({
            where: {
                spaceName: slug
            }
        })
        if (!frontenddata) {
            return NextResponse.json({ error: 'Space not found' }, { status: 404 });
        }
        let imageUrl: string | null = null;

        if (frontenddata.image) {
            imageUrl = await getobjurl('user/createspace/' + frontenddata.image);
        }
        console.log("\n\n inside testimonial  " + frontenddata);

        return NextResponse.json({
            frontenddata: { ...frontenddata, imageUrl } // Include signed URL in the response
        })

    } catch (e) {
        console.log(e);
    }


} 