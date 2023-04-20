import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = String(process.env.GOOGLE_CLIENT_ID);
const GOOGLE_CLIENT_SECRET = String(process.env.GOOGLE_CLIENT_SECRET);

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      let isAllowedToSignIn = true;
      const allowedUser = ["contato@eufelipe.com"];
      console.log(user);
      if (allowedUser.includes(String(user.email))) {
        isAllowedToSignIn = true;
      } else {
        isAllowedToSignIn = false;
      }
      return isAllowedToSignIn;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
