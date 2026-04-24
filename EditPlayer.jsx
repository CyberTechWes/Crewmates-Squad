import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import PlayerIcon from '../components/PlayerIcon'

const POSITIONS = ['PG', 'SG', 'SF', 'PF', 'C']
const JERSEY_COLORS = ['Black', 'Orange', 'White', 'Red', 'Blue', 'Purple', 'Green', 'Gold']
const RATINGS = ['Bronze (60-69)', 'Silver (70-79)', 'Gold (80-89)', 'Elite (90-99)']

export default function EditPlayer() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [original, setOriginal] = useState(null)
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [jerseyColor, setJerseyColor] = useState('')
  const [rating, setRating] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('Crewmates').select('*').eq('id', id).single()
      if (data) {
        setOriginal(data)
        setName(data.Name)
        setPosition(data.Position)
        setJerseyColor(data.JerseyColor)
        setRating(data.Rating)
      }
    }
    fetch()
  }, [id])

  const handleUpdate = async () => {
    if (!name.trim() || !position || !jerseyColor || !rating) return
    setLoading(true)
    await supabase.from('Crewmates').update({
      Name: name,
      Position: position,
      JerseyColor: jerseyColor,
      Rating: rating,
    }).eq('id', id)
    setLoading(false)
    navigate('/roster')
  }

  const handleDelete = async () => {
    setLoading(true)
    await supabase.from('Crewmates').delete().eq('id', id)
    setLoading(false)
    navigate('/roster')
  }

  if (!original) return <p style={{ color: '#555' }}>Loading...</p>

  return (
    <>
      <h2>Edit Player</h2>
      <div className="current-info">
        Current: {original.Name} · {original.Position} · {original.JerseyColor} Jersey · {original.Rating}
      </div>

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

      <div className="btn-row" style={{ marginTop: '0.5rem' }}>
        <button className="btn" onClick={handleUpdate} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
        <button className="btn btn-danger" onClick={handleDelete} disabled={loading}>
          Cut Player
        </button>
      </div>
    </>
  )
}
