import { useContext } from 'react'
import type { MouseEvent } from 'react'
import { GlobalContext } from '@store/globalState'
import { ProdActionType } from '@store/reducers/product'
import { OrderActionType } from '@store/reducers/orders'

function MixBoth() {
  const { products, productDispatch, orders, orderDispatch } = useContext(GlobalContext)

  const onAdd = (e: MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.type
    if (type === 'prod') {
      productDispatch({ type: ProdActionType.ADD_PRODUCT })
    } else if (type === 'order') {
      orderDispatch({ type: OrderActionType.ADD_ORDER })
    }
  }

  return (
    <main>
      <h4 className="py-3">Mix useContext with useReducer</h4>
      <div className="d-flex gap-4">
        <div>
          <button onClick={onAdd} data-type="prod">
            Add Product
          </button>
          {products.map((product, idx) => {
            return <div key={idx}>Product {product.id}</div>
          })}
        </div>
        <div>
          <button onClick={onAdd} data-type="order">
            Add Order
          </button>
          {orders.map((order, idx) => {
            return <div key={idx}>Order {order.id}</div>
          })}
        </div>
      </div>
    </main>
  )
}

export default MixBoth
