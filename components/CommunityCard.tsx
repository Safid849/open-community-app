import React from 'react';

interface CommunityCardProps {
  name: string;
  description: string | null;
  slug: string;
  memberCount: number;
}

export default function CommunityCard({ name, description, slug, memberCount }: CommunityCardProps) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '1.5rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      marginBottom: '1rem',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer'
    }}>
      {/* Header : Nom et Slug */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 'bold', color: '#1a1a1b' }}>
            {name}
          </h3>
          <span style={{ fontSize: '0.85rem', color: '#787c7e' }}>
            c/{slug}
          </span>
        </div>
      </div>

      {/* Description */}
      <p style={{ 
        fontSize: '0.95rem', 
        color: '#4a4a4a', 
        lineHeight: '1.5',
        margin: '12px 0',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {description || "Bienvenue dans cette communauté ! Aucune description n'a encore été ajoutée."}
      </p>

      {/* Footer : Nombre de membres */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '5px',
        fontSize: '0.8rem', 
        color: '#1c1c1c',
        fontWeight: '600',
        backgroundColor: '#f6f7f8',
        padding: '4px 10px',
        borderRadius: '20px',
        width: 'fit-content'
      }}>
        <span>👥</span>
        <span>{memberCount} membres</span>
      </div>
    </div>
  );
}