import { Routes, Route, Link, Navigate } from 'react-router-dom'
import ContextAPI from '@/views/ContextAPI'
import UseReducer from '@/views/UseReducer'
import MixBothPage from '@/views/MixBoth'

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/context-api" className="nav-link ps-0">
          Context API
        </Link>
        <Link to="/use-reducer" className="nav-link">
          useReducer
        </Link>
        <Link to="/mix-both" className="nav-link">
          Mix Both
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/context-api" />} />
        <Route path="/context-api" element={<ContextAPI />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/mix-both" element={<MixBothPage />} />
        <Route path="*" element={<Navigate to="/context-api" />} />
      </Routes>
    </div>
  )
}

export default App
