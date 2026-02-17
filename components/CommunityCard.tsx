interface CommunityCardProps {
  name: string;
  description: string | null;
  slug: string;
  memberCount: number;
}

export default function CommunityCard({ name, description, slug, memberCount }: CommunityCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900 m-0">{name}</h3>
          <span className="text-sm text-gray-500 italic">c/{slug}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed my-3 line-clamp-2">
        {description || "Bienvenue dans cette communauté !"}
      </p>

      <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full w-fit">
        <span>👥 {memberCount} membres</span>
      </div>
    </div>
  );
}