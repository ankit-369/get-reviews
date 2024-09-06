import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Next_Auth = {
  providers: [

  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }: any) {
      try {
        const currentTime = Math.floor(Date.now() / 1000);

        if (account?.provider === "google" && user?.email) {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email }
          })
          console.log("\n\ninside signin " + JSON.stringify(user));
          if (!existingUser) {
            await prisma.user.create({
              data: {
                email: user.email,
                name: user.name ?? null,
                image: user.image ?? null,
                createdAt: currentTime
                // googleId: user.id.toString()
                // Remove the 'id' field here as it's typically auto-generated
              }
            })
          }
        }
      } catch (error) {
        console.log("Error processing Google sign-in:", error);
        return false;
      }
      return true
    },

    async session({ session, token, user }: any) {

      try {
        if (session && token) {
          const existingUser = await prisma.user.findUnique({
            where: { email: token.email }, // Ensure token.email exists to avoid undefined lookups
          });
    
          if (existingUser) {
            session.user.id = existingUser.id;
            token.id = existingUser.id;
          }
        }
      } catch (error) {
        console.error("Error retrieving session data:", error);
      }
      return session
    },

  }


}

process.on('exit', async () => {
  await prisma.$disconnect();
});