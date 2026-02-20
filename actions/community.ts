import { prisma } from "../lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getAllCommunities() {
  return await prisma.community.findMany({
    include: {
      members: true, 
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createCommunity(name: string, description: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Vous devez être connecté pour créer une communauté.");
  }

  const slug = name.toLowerCase().trim().replace(/\s+/g, '-');

  const newCommunity = await prisma.community.create({
    data: {
      name,
      description,
      slug,
      adminId: userId, 
      members: {
        create: {
          userId: userId
        }
      }
    },
  });
  revalidatePath("/");
  
  return newCommunity;
}