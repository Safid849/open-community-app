"use client";
import React, {useState } from "react";
import { createPost } from "../actions/post";

export default function CreatePostForm({ communityId, authorId }: { communityId: string, authorId: string }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await createPost(content, authorId, communityId);
      setContent("");
      alert("Message publié !");
      window.location.reload();
    } catch (error) {
      alert("Erreur lors de la publication.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Quoi de neuf ?"
        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '100px' }}
      />
      <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Publier
      </button>
    </form>
  );
}