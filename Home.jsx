import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1 style={{ fontSize: '4rem' }}>Build Your Squad</h1>
      <p style={{ color: '#777', fontSize: '16px', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
        Assemble the ultimate basketball roster. Add players, set their positions, pick their jersey, and rate their skill.
      </p>

      {/* Court graphic */}
      <svg viewBox="0 0 340 180" width="340" style={{ margin: '1rem auto', display: 'block' }} xmlns="http://www.w3.org/2000/svg">
        {/* Court floor */}
        <rect x="10" y="10" width="320" height="160" rx="8" fill="#8B4513" />
        <rect x="10" y="10" width="320" height="160" rx="8" fill="none" stroke="#cc7a2f" strokeWidth="2" />
        {/* Court lines */}
        <line x1="170" y1="10" x2="170" y2="170" stroke="#e8a86b" strokeWidth="1.5" opacity="0.6" />
        <circle cx="170" cy="90" r="30" fill="none" stroke="#e8a86b" strokeWidth="1.5" opacity="0.6" />
        <circle cx="170" cy="90" r="4" fill="#e8a86b" opacity="0.6" />
        {/* Left key */}
        <rect x="10" y="55" width="60" height="70" fill="none" stroke="#e8a86b" strokeWidth="1.5" opacity="0.6" />
        <path d="M70,55 A35,35 0 0,1 70,125" fill="none" stroke="#e8a86b" strokeWidth="1.5" opacity="0.6" />
        {/* Right key */}
        <rect x="270" y="55" width="60" height="70" fill="none" stroke="#e8a86b" strokeWidth="1.5" opacity="0.6" />
        <path d="M270,55 A35,35 0 0,0 270,125" fill="none" stroke="#e8a86b" strokeWidth="1.5" opacity="0.6" />
        {/* Hoops */}
        <rect x="8" y="84" width="6" height="12" rx="1" fill="#ccc" />
        <line x1="14" y1="88" x2="28" y2="88" stroke="#ccc" strokeWidth="2" />
        <ellipse cx="28" cy="88" rx="8" ry="3" fill="none" stroke="#ff4500" strokeWidth="2" />
        <rect x="326" y="84" width="6" height="12" rx="1" fill="#ccc" />
        <line x1="326" y1="88" x2="312" y2="88" stroke="#ccc" strokeWidth="2" />
        <ellipse cx="312" cy="88" rx="8" ry="3" fill="none" stroke="#ff4500" strokeWidth="2" />
      </svg>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn" onClick={() => navigate('/create')}>Add Your First Player</button>
        <button className="btn btn-secondary" onClick={() => navigate('/roster')}>View Roster</button>
      </div>
    </div>
  )
}
