"use client";
import React, { useState } from "react";
import { createPost } from "../actions/post";

interface CreatePostFormProps {
  communityId: string;
  authorId: string;
}

export default function CreatePostForm({ communityId, authorId }: CreatePostFormProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      await createPost(content, authorId, communityId);
      setContent("");
      window.location.reload(); 
    } catch (error) {
      alert("Erreur lors de la publication.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Quoi de neuf ?"
        className="w-full p-3 text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none min-h-[100px]"
      />
      
      <div className="flex justify-end mt-3">
        <button 
          type="submit" 
          disabled={isSubmitting || !content.trim()}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold rounded-full transition-colors shadow-sm cursor-pointer"
        >
          {isSubmitting ? "Envoi..." : "Publier"}
        </button>
      </div>
    </form>
  );
}