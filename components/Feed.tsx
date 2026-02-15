import CommunityCard from "./CommunityCard";

interface CommunityWithMembers {
  id: string;
  name: string;
  description: string | null;
  slug: string;
  members: any[]; 
}

export default function Feed({ communities }: { communities: CommunityWithMembers[] }) {
  if (communities.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
        <p>Il n'y a pas encore de communautés ici. Soyez le premier à en créer une !</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {communities.map((community) => (
        <CommunityCard
          key={community.id}
          name={community.name}
          description={community.description}
          slug={community.slug}
          memberCount={community.members.length}
        />
      ))}
    </div>
  );
}