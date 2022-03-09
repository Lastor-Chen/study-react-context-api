import { Routes, Route, Link, Navigate } from 'react-router-dom'
import ContextPage from '@/views/Context'
import ReducerPage from '@/views/Reducer'
import MixBothPage from '@/views/MixBoth'

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/context" className="nav-link ps-0">
          Context API
        </Link>
        <Link to="/reducer" className="nav-link">
          useReducer
        </Link>
        <Link to="/mix-both" className="nav-link">
          Mix Both
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/context" />} />
        <Route path="/context" element={<ContextPage />} />
        <Route path="/reducer" element={<ReducerPage />} />
        <Route path="/mix-both" element={<MixBothPage />} />
      </Routes>
    </div>
  )
}

export default App
