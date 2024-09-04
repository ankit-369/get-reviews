import { Next_Auth } from '@/app/lib/auth';
import { CollectionType, PrismaClient, Theme } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { fromEnv } from "@aws-sdk/credential-providers";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
})

const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

async function putobj(filename: any, contentType: any) {
  
  

  const command = new PutObjectCommand({
    Bucket: 'kudos-vault',
    Key: `user/createspace/${filename}`,
    ContentType: contentType
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 10 });
  return url;
}


const prisma = new PrismaClient();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


export async function POST(req: NextRequest) {
  const session = await getServerSession(Next_Auth);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }




  try {
    const formData = await req.formData();

    const checkspacename = await prisma.space.findUnique({
      where: {
        spaceName: formData.get('spaceName') as string
      }
    })
    // if (checkspacename) {
    //   return NextResponse.json({ message: `spacename already exixts` }, { status: 400 });
    // }
    const requiredFields = ['spaceName', 'title', 'description', 'theme', 'collectiontype'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json({ message: `required ${field} field` }, { status: 400 });
      }
    }


    const spaceData: Record<string, string> = {
      spaceName: formData.get('spaceName') as string || '',
      title: formData.get('title') as string || '',
      description: formData.get('description') as string || '',
      question1: formData.get('question1') as string || '',
      question2: formData.get('question2') as string || '',
      question3: formData.get('question3') as string || '',
      theme: formData.get('theme') as string || '',
      logo: '',
      collectiontype: formData.get('collectiontype') as string || '',
    };

    const finalspacename = spaceData.spaceName.trim().replace(/\s+/g, '-');


    const logoFile = formData.get('logo') as File | null;
    // Get the presigned URL
    let logoname: string | undefined;

    if (logoFile) {
      
        const contentType = logoFile.type; // Get the MIME type of the file
    
        if (!allowedMimeTypes.includes(contentType)) {
          return NextResponse.json({ message: `Wromg image formate` }, { status: 400 });
        }
         logoname = `logo-${Date.now()}${path.extname(logoFile.name)}`;
        const uploadUrl = await putobj(logoname, contentType);
    
        // console.log("inside createspace.route.ts" + uploadUrl);
        // Use the presigned URL to upload the file
        const response = await fetch(uploadUrl, {
          method: 'PUT',
          body: logoFile // The file is uploaded in the body
        });
    
        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("Failed to upload file", response.statusText);
          return NextResponse.json({ message: `logo required` }, { status: 400 });
    
        }
    }



    console.log("\n\n\n\nthis is spacedata " + JSON.stringify(spaceData));
    // Here save spaceData to your database using Prisma
    const currentTime = Math.floor(Date.now() / 1000);

    if (spaceData) {
        const newSpace = await prisma.space.update({
            where: {
                spaceName: spaceData.spaceName
            },
            data: {
                userId: Number(session.user.id),
                title: spaceData.title,
                description: spaceData.description,
                ...(logoname && { image: logoname }), // Include image only if logoname is defined
                question1: spaceData.question1,
                question2: spaceData.question2,
                question3: spaceData.question3,
                theme: spaceData.theme as Theme,
                collectionType: spaceData.collectiontype as CollectionType,
                createdAt: currentTime
            }
        });
    }

    return NextResponse.json({ message: 'Space created successfully', data: spaceData }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error creating space' }, { status: 500 });
  }
}