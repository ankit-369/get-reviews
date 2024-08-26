import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next";
import { Next_Auth } from './app/lib/auth'; // Ensure this path is correct
import { getSession, useSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g., /, /protected, /admin)
  const path = request.nextUrl.pathname;
  console.log("this is currect path" + path);
  // const session = await getServerSession(Next_Auth);
  
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  console.log('User token in middleware: ', token)

  
  const publicPaths = ['/', '/api/auth/signin']; // Add any other public paths

  const isPublicPath = publicPaths.includes(path);
  if (!isPublicPath && !token) {

      return NextResponse.redirect(new URL('/api/auth/signin', request.url));
      
    } 
    
    // console.log('User session token:', token)


  return NextResponse.next();
}

export const config = {
  matcher: '/user/:path*', // Exclude the auth API routes from middleware
};
