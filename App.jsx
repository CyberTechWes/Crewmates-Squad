import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatePlayer from './pages/CreatePlayer'
import Roster from './pages/Roster'
import DetailPage from './pages/DetailPage'
import EditPlayer from './pages/EditPlayer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePlayer />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/player/:id" element={<DetailPage />} />
            <Route path="/edit/:id" element={<EditPlayer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
