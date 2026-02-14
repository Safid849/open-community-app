export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem' }}>
      <div style={{ fontWeight: 'bold' }}>Open Community</div>
      <a href="/">Accueil</a>
      <a href="/communities">Communautés</a>
      <a href="/profile">Mon Profil</a>
    </nav>
  );
}