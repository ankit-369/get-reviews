import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const Next_Auth = {
  providers: [
    CredentialsProvider({
            name: 'Credentials',
            credentials: {
              useremail: { label: 'email', type: 'text', placeholder: 'xyz@gmail.com' },
              password: { label: 'password', type: 'password', placeholder: 'Enter password' },
            },
            async authorize(credentials: any) {
              
              
              
              const email = credentials.useremail;
              const password = credentials.password;
              
              if(!email || !password){
                throw  Error ("enter all Credentials");

              }

              console.log(email);
              
              const user = await prisma.user.findUnique({
                where:{email}
              })
              console.log("\n\n console of user in auth.ts" + JSON.stringify(user));
              if(user && user.password){
                
                console.log("\n\nthis is suer " + password);
                console.log("\nthis is hashpasss " + user.password);
                
                const isvaild = await bcrypt.compare(password, user.password);
                if(!isvaild){
                  throw new Error ("wrong Credentials");
                  
                }
                
                return  { 
                  id : user.id.toString(),
                  email,
                  name : user.name || undefined,
                  image:user.image
                } ; 
                
              }else{  
                try{

                  const currentTime = Math.floor(Date.now() / 1000);
              
                  const hashedpassword = await bcrypt.hash(password , 10);
                  const newuser = await prisma.user.create({
                      data:{
                          email,
                          password : hashedpassword,
                          createdAt:currentTime

                          
                      }
                  })

                  return {
                      id : newuser.id.toString(),
                      email,
                      name : newuser.name || undefined,
                      image:newuser.image       
                    }
                }catch(e){
                  console.log(e);
                  throw new Error("Error creating user");

                }
                    
                }
                
            },
          }),


          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
        async signIn({ user, account } : any) {
          try{
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
                    createdAt:currentTime
                    // googleId: user.id.toString()
                    // Remove the 'id' field here as it's typically auto-generated
                  }
                })
              }
            }
          }catch(error){
            console.error("Error processing Google sign-in:", error);
          }
            return true
          },
        async session({ session, token ,user } : any) {
          
          // Send properties to the client, like an access_token and user id from a provider.
          // console.log("\n\n this is from auth.ts token "+ JSON.stringify(token));
          // console.log("\n\n\n this is from auth.ts session "+ JSON.stringify(session));

            if(session){
              const existingUser = await prisma.user.findUnique({
                where: { email: token.email } 
              });
                session.user.id = existingUser?.id;
                token.id = existingUser?.id;
                
            }
          return session
        },
     
      }

   
}

process.on('exit', async () => {
  await prisma.$disconnect();
});