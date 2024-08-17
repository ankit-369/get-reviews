import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { fromEnv } from "@aws-sdk/credential-providers";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};


const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
})

const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

async function putobj(fileroute: any, contentType: any) {



  const command = new PutObjectCommand({
    Bucket: 'kudos-vault',
    Key: fileroute,
    ContentType: contentType
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 10 });
  return url;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Process form fields
    const spaceid = formData.get('spaceid') as string || '';
    const name = formData.get('name') as string || '';
    const email = formData.get('email') as string || '';
    const rating = formData.get('rating') as string || '0';
    const testimonial = formData.get('testimonial') as string || '';
    const permission = formData.get('permission') as string || 'false';

    // Process images

    if (formData.get('permission') === 'false') {
      return NextResponse.json({ message: `You must agree to the permissions` });

    }
    const requiredFields = ['name', 'email', 'testimonial'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json({ message: `required ${field} field` });
      }
    }
    const imagePaths: string[] = [];
    const images = formData.getAll('images') as File[];
    let filename:string;
    if (images.length != 0) {
      for (const image of images) {
        const contentType = image.type; // Get the MIME type of the file

        if (!allowedMimeTypes.includes(contentType)) {
          return NextResponse.json({ message: `Wromg image formate \n we allow png , jpg , jpeg only :)` }, { status: 400 });
        }
        filename = `logo-${Date.now()}${path.extname(image.name)}`;
        const coustomer_review = await putobj(`coustomer/reviewimages/${filename}`, contentType);
        imagePaths.push(filename)
        // console.log("inside createspace.route.ts" + uploadUrl);
        // Use the presigned URL to upload the file
        const response = await fetch(coustomer_review, {
          method: 'PUT',
          body: image // The file is uploaded in the body
        });

        if (response.ok) {
          console.log("coustomer_review uploaded successfully");
        } else {
          console.error("Failed to upload coustomer_review", response.statusText);
          return NextResponse.json({ message: `logo required` }, { status: 400 });

        }

      }
    }
    console.log('Images:', images); // Debugging


    
    const photo = formData.get('photo') as File;
    let photoname: string;
    if(photo){
      const contentType = photo.type; // Get the MIME type of the file

        if (!allowedMimeTypes.includes(contentType)) {
          return NextResponse.json({ message: `Wromg image formate \n we allow png , jpg , jpeg only :)` }, { status: 400 });
        }
        photoname = `photo-${Date.now()}${path.extname(photo.name)}`;
        const coustomer_image = await putobj(`coustomer/images/${photoname}`, contentType);

        const res = await fetch(coustomer_image,{
          method:'PUT',
          body:photo

        })

        if (res.ok) {
          console.log("coustomer image successfully");
        } else {
          console.error("Failed to upload fcoustomer image", res.statusText);
          return NextResponse.json({ message: `logo required` }, { status: 400 });

        }
    }

   
    console.log('Form Data:', Object.fromEntries(formData)); // Debugging


    const result = await prisma.$transaction(async (prisma) => {
      const currentTime = Math.floor(Date.now() / 1000);
      const incertreview = await prisma.review.create({
        data: {
          spaceId: Number(spaceid),
          name,
          email,
          star: Number(rating),
          review: testimonial,
          permission: permission,
          photo: photoname,
          createdAt: currentTime


        }
      })
      const recent_added_id = incertreview.id;

      for (const image of imagePaths) {
        const add_image = await prisma.reviewimages.create({
          data: {
            reviewId: recent_added_id,
            image,
            createdAt: currentTime


          }
        })
      }

      return incertreview
    })



    return NextResponse.json({
      message: 'Form submitted successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error: 'Error processing form data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}