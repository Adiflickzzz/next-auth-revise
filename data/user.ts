import { db } from "@/lib/db";

export const getUserbyEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
  } catch {
    return null;
  }
};

export const getUserbyId = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
  } catch {
    return null;
  }
};
