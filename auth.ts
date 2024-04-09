import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import { db } from "./db"
import GitHub from "@auth/core/providers/github"


if(!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET){
    throw new Error("Missing github oauth credentials")
}

export const {handlers: {GET, POST}, auth, signOut, signIn} = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        //usually not needed , fixing bug in nextauth
        async session({ session, user }: any){
            if(session && user){
                session.user.id = user.id
            }
            return session
        }
    }
})