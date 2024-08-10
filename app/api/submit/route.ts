import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    const imagePaths: string[] = [];
    const images = formData.getAll('images');

    console.log('Images:', images); // Debugging

    if(formData.get('permission') === 'false'){
      return NextResponse.json({ message: `You must agree to the permissions` });

    }
    const requiredFields = ['name', 'email', 'testimonial'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json({ message: `required ${field} field` });
      }
    }


    for (const image of images) {
      if (image && typeof image === 'object' && 'arrayBuffer' in image) {
        const buffer = await (image as unknown as Blob).arrayBuffer();
        // const filename = `${Date.now()}-${(image as any).name}`;
        const filename = `reviewimage-${Date.now()}${path.extname(image.name)}`;

        const filepath = path.join(process.cwd(), 'public', 'reviewimage', filename);
        await fs.outputFile(filepath, Buffer.from(buffer));
        imagePaths.push(`/reviewimage/${filename}`);
      } else {
        console.log('Not a file:', image); // Debugging
      }
    }

    // Process photo
    let photoPath = '';
    const photo = formData.get('photo');
    if (photo && typeof photo === 'object' && 'arrayBuffer' in photo) {
      const buffer = await (photo as unknown as Blob).arrayBuffer();
      // const filename = `${Date.now()}-${(photo as any).name}`;
      const filename = `photo-${Date.now()}${path.extname(photo.name)}`;

      const filepath = path.join(process.cwd(), 'public', 'customer', filename);
      await fs.outputFile(filepath, Buffer.from(buffer));
      photoPath = `/customer/${filename}`;
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
          photo: photoPath,
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
  }finally {
    await prisma.$disconnect();
  }
}