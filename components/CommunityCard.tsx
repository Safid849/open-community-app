import React from 'react';
import Link from 'next/link';

interface CommunityCardProps {
  name: string;
  description: string | null;
  slug: string;
  memberCount: number;
}

export default function CommunityCard({ name, description, slug, memberCount }: CommunityCardProps) {
  return (
    <Link href={`/c/${slug}`} className="block">
      <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">c/{slug}</p>
          </div>
          
          <div className="bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5">
            <span className="text-blue-500">👥</span>
            {memberCount} {memberCount > 1 ? 'membres' : 'membre'}
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-4 leading-relaxed line-clamp-2">
          {description || "Bienvenue dans cette communauté ! Aucune description n'a encore été fournie."}
        </p>

        <div className="mt-4 flex items-center text-blue-600 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          Voir la communauté →
        </div>
      </div>
    </Link>
  );
}