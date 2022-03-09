import { createContext } from 'react'

interface ProdState {
  products: { id: number }[]
}

interface OrderState {
  orders: { id: number }[]
}

export enum MixBothActionKind {
  ADD_PRODUCT = 'ADD_PRODUCT',
  ADD_ORDER = 'ADD_ORDER',
}

interface MixBothAction {
  type: MixBothActionKind
}

export const MixBothContext = createContext({
  products: [] as ProdState['products'],
  prodDispatch: (value: MixBothAction) => {},
  orders: [] as OrderState['orders'],
  orderDispatch: (value: MixBothAction) => {},
})

export function productsReducer(state: ProdState, action: MixBothAction): ProdState {
  if (action.type === MixBothActionKind.ADD_PRODUCT) {
    return {
      ...state,
      products: [...state.products, { id: state.products.length }],
    }
  }

  return state
}

export function ordersReducer(state: OrderState, action: MixBothAction): OrderState {
  if (action.type === 'ADD_ORDER') {
    return {
      ...state,
      orders: [...state.orders, { id: state.orders.length }],
    }
  }

  return state
}
