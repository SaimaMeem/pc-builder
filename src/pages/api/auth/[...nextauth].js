import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    pages:{
        signIn: "https://pc-builder-alpha-two.vercel.app/login"
    }
};

export default NextAuth(authOptions);
