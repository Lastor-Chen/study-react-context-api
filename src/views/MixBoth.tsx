import { useReducer } from 'react'
import { productsReducer, ordersReducer, MixBothContext } from '@store/mixBoth'
import Products from '@components/Products'
import Orders from '@components/Orders'

const productsInitState = { products: [] }
const ordersInitState = { orders: [] }

function MixBoth() {
  const [prodState, prodDispatch] = useReducer(productsReducer, productsInitState)
  const [orderState, orderDispatch] = useReducer(ordersReducer, ordersInitState)

  console.log('render MixBoth')
  return (
    <div>
      <h4>Mix Both</h4>
      <MixBothContext.Provider
        value={{
          products: prodState.products,
          orders: orderState.orders,
          prodDispatch,
          orderDispatch,
        }}>
        <div className="d-flex gap-4">
          <Products />
          <Orders />
        </div>
      </MixBothContext.Provider>
    </div>
  )
}

export default MixBoth
