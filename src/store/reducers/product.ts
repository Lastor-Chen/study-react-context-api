export interface ProdState {
  products: { id: number }[]
}

export enum ProdActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

export interface ProductAction {
  type: ProdActionType
}

function productReducer(state: ProdState, action: ProductAction): ProdState {
  switch (action.type) {
    case ProdActionType.ADD_PRODUCT:
      // 不能用 push 等方法, 必須返回新內容
      return {
        ...state,
        products: [...state.products, { id: state.products.length }],
      }
    default:
      throw new Error('Unknown action type')
  }
}

export default productReducer
