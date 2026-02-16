export default function PostCard({ content, authorName, createdAt }: {
  content: string;
  authorName: string;
  createdAt: Date;
}) {
  return (
    <div style={{
      border: '1px solid #e1e1e1',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: 'white',
      marginBottom: '10px'
    }}>
      <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '8px' }}>
        Posté par <strong>{authorName}</strong> le {new Date(createdAt).toLocaleDateString()}
      </div>
      <p style={{ margin: 0, color: '#1a1a1a', lineHeight: '1.5' }}>
        {content}
      </p>
    </div>
  );
}