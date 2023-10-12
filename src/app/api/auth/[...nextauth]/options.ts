import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers:[ 
        Github({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string,
        }),
        Credentials({
            name:"Credentials",
            credentials:{
                username:{
                    label:"Username:",
                    type:"text",
                    placeholder:"Your username"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"Password"
                }
            },
           async authorize(credentials){
            //This is where you need to retrieve user data
            //to verify with credentials
            const user = { id:"42",name:"John",password:"nextauth"}

            if(credentials?.username === user.name && credentials?.password === user.password){
                return user
            } else{
                return null
            }
           }
        })
    ],
}