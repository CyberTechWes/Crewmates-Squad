import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import PlayerIcon from '../components/PlayerIcon'

const ratingClass = (rating) => {
  if (!rating) return 'badge-rating-bronze'
  if (rating.includes('Bronze')) return 'badge-rating-bronze'
  if (rating.includes('Silver')) return 'badge-rating-silver'
  if (rating.includes('Gold')) return 'badge-rating-gold'
  if (rating.includes('Elite')) return 'badge-rating-elite'
  return 'badge-rating-bronze'
}

export default function Roster() {
  const [players, setPlayers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from('Crewmates')
        .select('*')
        .order('created_at', { ascending: false })
      if (data) setPlayers(data)
    }
    fetch()
  }, [])

  return (
    <>
      <h2>My Roster</h2>
      {players.length === 0 ? (
        <div className="empty-msg">
          <p>Your roster is empty. Start building your squad!</p>
          <button className="btn" onClick={() => navigate('/create')}>Add First Player</button>
        </div>
      ) : (
        <div className="roster">
          {players.map(p => (
            <div
              key={p.id}
              className="player-card"
              onClick={() => navigate(`/player/${p.id}`)}
            >
              <PlayerIcon jerseyColor={p.JerseyColor} number={p.Position} size={100} />
              <div className="player-card-info">
                <div className="name">{p.Name}</div>
                <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '4px', flexWrap: 'wrap' }}>
                  <span className={`badge badge-position`}>{p.Position}</span>
                  <span className={`badge ${ratingClass(p.Rating)}`}>{p.Rating?.split(' ')[0]}</span>
                </div>
                <div style={{ color: '#555', fontSize: '12px', marginTop: '4px' }}>{p.JerseyColor} Jersey</div>
              </div>
              <button
                className="btn"
                style={{ fontSize: '12px', padding: '0.35rem 1rem' }}
                onClick={e => { e.stopPropagation(); navigate(`/edit/${p.id}`) }}
              >
                Edit Player
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
