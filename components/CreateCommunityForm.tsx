"use client"; // Obligatoire car on utilise un formulaire interactif (onSubmit)

import React, { useState } from 'react';
import { createCommunity } from '../actions/community';

export default function CreateCommunityForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    try {
      // Pour l'instant, on passe un ID d'admin "test" 
      // Plus tard, on récupérera l'ID de l'utilisateur connecté
      await createCommunity(name, description, "user_test_123");
      alert("Communauté créée !");
      e.currentTarget.reset(); // Vide le formulaire
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la création.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Nom de la communauté</label>
        <input 
          name="name" 
          required 
          placeholder="ex: Passion Cuisine" 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: '600' }}>Description (optionnel)</label>
        <textarea 
          name="description" 
          placeholder="De quoi parle votre groupe ?" 
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd', minHeight: '80px', resize: 'vertical' }}
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        style={{ 
          padding: '12px', 
          backgroundColor: loading ? '#ccc' : '#0070f3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px', 
          fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? "Création..." : "Lancer la communauté"}
      </button>
    </form>
  );
}