"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserbyEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validationFields = RegisterSchema.safeParse(values);

  // @ts-ignore
  const { email, password, name } = validationFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserbyEmail(email);

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);


  return { success: "Confirmation email sent!" };
};
