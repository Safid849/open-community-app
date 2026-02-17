import CommunityCard from "./CommunityCard";

interface Community {
  id: string;
  name: string;
  description: string | null;
  slug: string;
  members: any[];
}

export default function Feed({ communities }: { communities: Community[] }) {
  if (communities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border-2 border-dashed border-slate-200">
        <p className="text-slate-500 font-medium">Aucune communauté trouvée.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 w-full">
      {communities.map((c) => (
        <CommunityCard 
          key={c.id} 
          name={c.name} 
          description={c.description} 
          slug={c.slug} 
          memberCount={c.members.length} 
        />
      ))}
    </div>
  );
}