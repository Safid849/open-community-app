"use client";
import { useState } from 'react';
import { createCommunity } from '../actions/community';

export default function CreateCommunityForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await createCommunity(formData.get('name') as string, formData.get('description') as string, "user_test_123");
      alert("Succès !");
      e.currentTarget.reset();
    } catch (error) {
      alert("Erreur de création.");
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
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Nom de la communauté"
          required 
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
        <textarea 
          name="description" 
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          placeholder="Décrivez votre groupe..."
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-slate-300"
      >
        {loading ? "Création..." : "Créer la communauté"}
      </button>
    </form>
  );
}