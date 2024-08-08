import { Next_Auth } from "@/app/lib/auth";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(Next_Auth)

export { handler as GET, handler as POST }