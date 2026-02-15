import { prisma } from "../lib/prisma";

export async function getAllCommunities() {
  try {
    return await prisma.community.findMany({
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    return [];
  }
}

export async function createCommunity(name: string, description: string, userId: string) {
  const slug = name.toLowerCase().trim().replace(/\s+/g, '-');

  return await prisma.community.create({
    data: { 
      name: name, 
      description: description,
      slug: slug,
      admin: {
        connect: { id: userId }
      }
    }
  });
}