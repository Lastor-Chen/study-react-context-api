import { createContext } from 'react'
import type { ProdState, ProductAction } from '@store/reducers/product'
import type { OrderState, OrderAction } from '@store/reducers/orders'

interface GlobalState {
  products: ProdState['products']
  orders: OrderState['orders']
  productDispatch(value: ProductAction): void
  orderDispatch(value: OrderAction): void
}

export const GlobalContext = createContext<GlobalState>({
  products: [],
  orders: [],
  productDispatch() {},
  orderDispatch() {},
})
