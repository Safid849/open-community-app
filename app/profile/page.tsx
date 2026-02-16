import { prisma } from "../../lib/prisma";
import CommunityCard from "../../components/CommunityCard";

export default async function ProfilePage() {
  const myCommunities = await prisma.community.findMany({
    where: {
      adminId: "user_test_123" 
    },
    include: {
      members: true
    }
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mon Profil</h1>
      <h2>Mes Communautés</h2>
      {myCommunities.length > 0 ? (
        myCommunities.map(c => (
          <CommunityCard 
            key={c.id} 
            name={c.name} 
            description={c.description} 
            slug={c.slug} 
            memberCount={c.members.length} 
          />
        ))
      ) : (
        <p>Vous n'avez pas encore créé de communauté.</p>
      )}
    </div>
  );
}