import { Routes, Route, Link, Navigate } from 'react-router-dom'
import ContextAPI from '@/views/ContextAPI'
import UseReducer from '@/views/UseReducer'
import MixBoth from '@/views/MixBoth'
import { GlobalContext } from '@/store/globalState'
import { useReducer } from 'react'
import productsReducer from '@store/reducers/product'
import ordersReducer from '@store/reducers/orders'

const productsInitState = { products: [] }
const ordersInitState = { orders: [] }

function App() {
  const [prodState, productDispatch] = useReducer(productsReducer, productsInitState)
  const [orderState, orderDispatch] = useReducer(ordersReducer, ordersInitState)
  const providerValue = {
    products: prodState.products,
    orders: orderState.orders,
    productDispatch,
    orderDispatch,
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
