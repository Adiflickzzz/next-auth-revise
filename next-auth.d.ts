import NextAuth, { type DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  interface Session {
    user: {
      role: "ADMIN" | "USER";
    } & DefaultSession["user"];
  }
}
