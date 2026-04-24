const JERSEY_COLORS = {
  Black:   { body: '#1a1a1a', trim: '#ff6b00', number: '#fff' },
  Orange:  { body: '#e05a00', trim: '#fff',    number: '#fff' },
  White:   { body: '#f0f0f0', trim: '#222',    number: '#222' },
  Red:     { body: '#c0392b', trim: '#fff',    number: '#fff' },
  Blue:    { body: '#1a4fa0', trim: '#fff',    number: '#fff' },
  Purple:  { body: '#5b2d8e', trim: '#ffd700', number: '#fff' },
  Green:   { body: '#1a6b2a', trim: '#fff',    number: '#fff' },
  Gold:    { body: '#c9a227', trim: '#1a1a1a', number: '#1a1a1a' },
}

export default function PlayerIcon({ jerseyColor = 'Black', number = '?', size = 100 }) {
  const colors = JERSEY_COLORS[jerseyColor] || JERSEY_COLORS.Black

  return (
    <svg viewBox="0 0 100 120" width={size} xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="50" cy="18" r="14" fill="#d4a47c" />
      {/* Hair */}
      <ellipse cx="50" cy="7" rx="14" ry="6" fill="#2a1a0a" />
      {/* Jersey body */}
      <path d="M28,42 L18,60 L30,62 L30,95 L70,95 L70,62 L82,60 L72,42 Q61,35 50,35 Q39,35 28,42Z" fill={colors.body} />
      {/* Jersey trim stripes */}
      <path d="M28,42 L18,60 L26,61 L34,44 Z" fill={colors.trim} opacity="0.6" />
      <path d="M72,42 L82,60 L74,61 L66,44 Z" fill={colors.trim} opacity="0.6" />
      {/* Collar */}
      <path d="M42,35 Q50,40 58,35 L56,42 Q50,46 44,42 Z" fill={colors.trim} opacity="0.8" />
      {/* Jersey number */}
      <text x="50" y="75" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="22" fill={colors.number} fontWeight="bold">{number}</text>
      {/* Shorts */}
      <rect x="30" y="95" width="40" height="22" rx="4" fill={colors.body} opacity="0.85" />
      {/* Shorts trim */}
      <rect x="30" y="95" width="40" height="4" fill={colors.trim} opacity="0.5" />
      {/* Legs */}
      <rect x="32" y="117" width="14" height="3" rx="2" fill="#d4a47c" />
      <rect x="54" y="117" width="14" height="3" rx="2" fill="#d4a47c" />
      {/* Arms */}
      <path d="M28,48 Q14,58 16,70 L24,68 Q23,60 34,52Z" fill="#d4a47c" />
      <path d="M72,48 Q86,58 84,70 L76,68 Q77,60 66,52Z" fill="#d4a47c" />
      {/* Basketball in right hand */}
      <circle cx="83" cy="73" r="8" fill="#e05a00" />
      <path d="M76,73 Q83,68 90,73" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <path d="M76,73 Q83,78 90,73" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <line x1="83" y1="65" x2="83" y2="81" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  )
}

export { JERSEY_COLORS }
