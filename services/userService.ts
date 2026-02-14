import { prisma } from "../lib/prisma";

export const createUser = async (email: string, name: string) => {
  return await prisma.user.create({
    data: {
      email,
      name,
    },
  });
};

export const getCommunities = async () => {
  return await prisma.community.findMany({
    include: {
      _count: {
        select: { posts: true, members: true }
      }
    }
  });
};