import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CreatePostForm from "@/components/CreatePostForm";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";

export default async function CommunityPage({ params }: { params: { slug: string } }) {
  const community = await prisma.community.findUnique({
    where: { slug: params.slug },
    include: {
      posts: {
        include: { author: true },
        orderBy: { createdAt: 'desc' }
      },
      _count: { select: { members: true } }
    }
  });

  if (!community) return notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <header className="bg-white border-b border-slate-200 pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900">{community.name}</h1>
          <p className="text-slate-500 font-mono text-sm">c/{community.slug}</p>
          <p className="mt-2 text-slate-700">{community.description}</p>
          <div className="mt-4 text-sm font-medium text-slate-600">
            👥 {community._count.members} membres
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CreatePostForm communityId={community.id} authorId="user_test_123" />
          
          <div className="space-y-4 mt-8">
            {community.posts.map((post) => (
              <PostCard 
                key={post.id}
                content={post.content}
                authorName={post.author.name || "Anonyme"}
                createdAt={post.createdAt}
              />
            ))}
          </div>
        </div>

        <aside>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">À propos</h3>
            <p className="text-sm text-slate-600">
              Créée le {new Date(community.createdAt).toLocaleDateString()}
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}