import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import PlayerIcon from '../components/PlayerIcon'

const POSITIONS = ['PG', 'SG', 'SF', 'PF', 'C']
const JERSEY_COLORS = ['Black', 'Orange', 'White', 'Red', 'Blue', 'Purple', 'Green', 'Gold']
const RATINGS = ['Bronze (60-69)', 'Silver (70-79)', 'Gold (80-89)', 'Elite (90-99)']

export default function CreatePlayer() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [jerseyColor, setJerseyColor] = useState('')
  const [rating, setRating] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleCreate = async () => {
    if (!name.trim() || !position || !jerseyColor || !rating) return
    setLoading(true)
    await supabase.from('Crewmates').insert([{
      Name: name,
      Position: position,
      JerseyColor: jerseyColor,
      Rating: rating,
    }])
    setLoading(false)
    navigate('/roster')
  }

  return (
    <>
      <h2>Add a New Player</h2>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div className="form-section" style={{ flex: 1 }}>
          <div className="field" style={{ minWidth: '200px' }}>
            <label>Player Name</label>
            <input
              type="text"
              placeholder="Enter player name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Position</label>
            <div className="option-grid">
              {POSITIONS.map(p => (
                <button
                  key={p}
                  className={`option-btn ${position === p ? 'selected' : ''}`}
                  onClick={() => setPosition(p)}
                >
                  {p === 'PG' ? '🎯 Point Guard' :
                   p === 'SG' ? '🏹 Shooting Guard' :
                   p === 'SF' ? '⚡ Small Forward' :
                   p === 'PF' ? '💪 Power Forward' :
                   '🗼 Center'}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label>Jersey Color</label>
            <div className="option-grid">
              {JERSEY_COLORS.map(c => (
                <button
                  key={c}
                  className={`option-btn ${jerseyColor === c ? 'selected' : ''}`}
                  onClick={() => setJerseyColor(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label>Skill Rating</label>
            <div className="option-grid">
              {RATINGS.map(r => (
                <button
                  key={r}
                  className={`option-btn ${rating === r ? 'selected' : ''}`}
                  onClick={() => setRating(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live preview */}
        <div style={{ textAlign: 'center', minWidth: '160px' }}>
          <p style={{ color: '#555', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Preview</p>
          <PlayerIcon jerseyColor={jerseyColor || 'Black'} number={position || '?'} size={130} />
          {name && <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#ff6b00', marginTop: '0.5rem' }}>{name}</p>}
        </div>
      </div>

      <button className="btn" onClick={handleCreate} disabled={loading} style={{ marginTop: '0.5rem' }}>
        {loading ? 'Adding to Roster...' : 'Add to Roster'}
      </button>
    </>
  )
}
