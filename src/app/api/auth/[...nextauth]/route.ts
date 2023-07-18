import { connectDB } from "@/app/database/dataConfig";
import User from "@/app/model/User";
import { waitForDebugger } from "inspector";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId  :process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ], 
  callbacks:{
    async signIn({profile}:any){
      console.log(profile);
      try {
       await connectDB()
      const userExist = await User.findOne({email: profile.email})

      if(!userExist) {
        const user = await User.create({
          email: profile.email ,
          name: profile.name,
          image: profile.image
        })
      }        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
       }
  },
})


export {handler as GET , handler as POST }


