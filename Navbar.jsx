import { NavLink } from 'react-router-dom'

const styles = {
  nav: {
    width: '190px',
    background: '#111',
    borderRight: '1px solid #1f1f1f',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 0',
    gap: '0.25rem',
    flexShrink: 0,
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.4rem',
    color: '#ff6b00',
    textAlign: 'center',
    letterSpacing: '2px',
    marginBottom: '1.5rem',
    padding: '0 1rem',
    lineHeight: 1.2,
  },
  divider: {
    height: '1px',
    background: '#1f1f1f',
    margin: '0.5rem 1rem 1rem',
  },
}

const linkStyle = ({ isActive }) => ({
  display: 'block',
  padding: '0.7rem 1.5rem',
  color: isActive ? '#ff6b00' : '#666',
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  borderLeft: isActive ? '3px solid #ff6b00' : '3px solid transparent',
  transition: 'all 0.15s',
})

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🏀 Squad<br />Builder</div>
      <div style={styles.divider} />
      <NavLink to="/" end style={linkStyle}>Home</NavLink>
      <NavLink to="/create" style={linkStyle}>Add Player</NavLink>
      <NavLink to="/roster" style={linkStyle}>My Roster</NavLink>
    </nav>
  )
}
