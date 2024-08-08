import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()

export async function POST(req : NextRequest) {

    try{

        const body =  await req.json();
        console.log("\nn\inside testimonial      "+body.data)
        const slug =decodeURIComponent(body.data);
        const frontenddata = await prisma.space.findUnique({
            where :{
                spaceName : slug
            }
        })

        console.log("\n\n inside testimonial  "+ frontenddata);

        return NextResponse.json({
            frontenddata
        })

    }catch(e){
        console.log(e);
    }

    
} 