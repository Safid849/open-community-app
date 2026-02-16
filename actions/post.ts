import { prisma } from "../lib/prisma";

export async function createPost(content: string, authorId: string, communityId: string) {
  return await prisma.post.create({
    data: {
      content,
      authorId,
      communityId,
    },
  });
}

export async function getCommunityPosts(communityId: string) {
  return await prisma.post.findMany({
    where: { communityId },
    include: {
      author: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}