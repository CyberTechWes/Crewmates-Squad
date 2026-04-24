import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import PlayerIcon from '../components/PlayerIcon'

const positionFull = {
  PG: 'Point Guard',
  SG: 'Shooting Guard',
  SF: 'Small Forward',
  PF: 'Power Forward',
  C: 'Center',
}

export default function DetailPage() {
  const { id } = useParams()
  const [player, setPlayer] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('Crewmates').select('*').eq('id', id).single()
      if (data) setPlayer(data)
    }
    fetch()
  }, [id])

  if (!player) return <p style={{ color: '#555' }}>Loading...</p>

  const isBronze = player.Rating?.includes('Bronze')

  return (
    <div className="detail-page">
      <h1>{player.Name}</h1>
      <p style={{ color: '#555', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
        Player Profile
      </p>

      <PlayerIcon jerseyColor={player.JerseyColor} number={player.Position} size={150} />

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-label">Position</div>
          <div className="stat-value">{positionFull[player.Position] || player.Position}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Jersey</div>
          <div className="stat-value">{player.JerseyColor}</div>
        </div>
        <div className="stat-box" style={{ gridColumn: 'span 2' }}>
          <div className="stat-label">Skill Rating</div>
          <div className="stat-value">{player.Rating}</div>
        </div>
      </div>

      {isBronze && (
        <p style={{ color: '#777', fontSize: '13px', marginBottom: '1rem' }}>
          This player might need some development time — consider upgrading their rating. 💪
        </p>
      )}

      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <button className="btn" onClick={() => navigate(`/edit/${player.id}`)}>Edit Player</button>
        <button className="btn btn-secondary" onClick={() => navigate('/roster')}>Back to Roster</button>
      </div>
    </div>
  )
}
