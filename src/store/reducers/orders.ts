export interface OrderState {
  orders: { id: number }[]
}

export enum OrderActionType {
  ADD_ORDER = 'ADD_ORDER',
}

export interface OrderAction {
  type: OrderActionType
}

function orderReducer(state: OrderState, action: OrderAction): OrderState {
  switch (action.type) {
    case OrderActionType.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, { id: state.orders.length }],
      }
    default:
      throw new Error('Unknown action type')
  }
}

export default orderReducer
