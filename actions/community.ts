import { prisma } from "../lib/prisma";

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

export async function createCommunity(name: string, description: string, userId: string) {
  const slug = name.toLowerCase().trim().replace(/\s+/g, '-');

  return await prisma.community.create({
    data: {
      name,
      description,
      slug,
      admin: {
        connect: { id: userId } 
      },
      members: {
        create: {
          userId: userId
        }
      }
    },
  });
}