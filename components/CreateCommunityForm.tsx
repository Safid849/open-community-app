"use client";
import React, { useState } from 'react';
import { createCommunity } from '../actions/community';

export default function CreateCommunityForm() {
  const [loading, setLoading] = useState(false);

  // Utilisation de BaseSyntheticEvent pour éviter le "deprecated" de 2026
  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    try {
      // On ne passe plus l'ID ici, l'action le récupère toute seule !
      await createCommunity(name, description);
      
      alert("La communauté a été créée avec succès !");
      e.target.reset(); // On vide le formulaire
    } catch (error) {
      console.error(error);
      alert("Erreur de création. Vérifiez que vous êtes bien connecté.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Nom</label>
        <input 
          name="name" 
          type="text"
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          placeholder="Ex: Passion Cuisine"
          required 
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
        <textarea 
          name="description" 
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] transition-all outline-none resize-none"
          placeholder="De quoi parle votre groupe ?"
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all disabled:bg-slate-300 disabled:cursor-not-allowed shadow-sm active:scale-[0.98]"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
             Chargement...
          </span>
        ) : "Créer la communauté"}
      </button>
    </form>
  );
}