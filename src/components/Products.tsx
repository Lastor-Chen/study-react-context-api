import { useContext } from 'react'
import { MixBothContext, MixBothActionKind } from '../store/mixBoth'

function Products() {
  const { products, prodDispatch } = useContext(MixBothContext)

  const onAdd = () => {
    prodDispatch({ type: MixBothActionKind.ADD_PRODUCT })
  }

  console.log('render Products')
  return (
    <div>
      <button onClick={onAdd}>Add Product</button>
      {products.map((product, idx) => {
        return <div key={idx}>Product {product.id}</div>
      })}
    </div>
  )
}

export default Products
