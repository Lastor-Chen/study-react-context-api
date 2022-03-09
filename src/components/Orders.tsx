import { useContext } from 'react'
import { MixBothContext, MixBothActionKind } from '../store/mixBoth'

function Orders() {
  const { orders, orderDispatch } = useContext(MixBothContext)

  const onAdd = () => {
    orderDispatch({ type: MixBothActionKind.ADD_ORDER })
  }

  console.log('render Orders')
  return (
    <div>
      <button onClick={onAdd}>Add Order</button>
      {orders.map((product, idx) => {
        return <div key={idx}>Product {product.id}</div>
      })}
    </div>
  )
}

export default Orders
