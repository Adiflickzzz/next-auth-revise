import NextAuth from "next-auth";
import authConfig from "./auth.config";

import GitHub from "next-auth/providers/github";

import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "./lib/db";
import { getUserbyId } from "./data/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages:{
    signIn:"/auth/login",
    error:"/auth/error",
  },
  events:{
    async linkAccount({user}) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date()}
      })
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: { strategy: "jwt" },
});
