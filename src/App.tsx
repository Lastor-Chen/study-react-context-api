import { Routes, Route, Link, Navigate } from 'react-router-dom'
import ContextAPI from '@/views/ContextAPI'
import UseReducer from '@/views/UseReducer'
import MixBoth from '@/views/MixBoth'
import { GlobalContext } from '@/store/globalState'
import type { GlobalState } from '@/store/globalState'
import { useReducer, useState } from 'react'
import itemsBReducer from '@/store/reducers/itemsB'

function App() {
  const [itemsA, setItemsA] = useState<GlobalState['itemsA']>([])
  const [itemsBState, dispatchItemsB] = useReducer(itemsBReducer, { itemsB: [] })
  const providerValue: GlobalState = {
    itemsA: itemsA,
    setItemsA,
    itemsB: itemsBState.itemsB,
    dispatchItemsB,
  }

  return (
    // 全域狀態 Provider 要往 Routes 父層放, 換路由才能維持
    <GlobalContext.Provider value={providerValue}>
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
          <Route path="/mix-both" element={<MixBoth />} />
          <Route path="*" element={<Navigate to="/context-api" />} />
        </Routes>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
