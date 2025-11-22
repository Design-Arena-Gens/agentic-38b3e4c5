export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)',
      color: 'white',
      textAlign: 'center',
      padding: 24
    }}>
      <div>
        <h1 style={{ fontSize: 48, margin: 0 }}>Hi ??</h1>
        <p style={{ fontSize: 18, opacity: 0.9, marginTop: 12 }}>Your app is live and ready.</p>
      </div>
    </main>
  );
}
