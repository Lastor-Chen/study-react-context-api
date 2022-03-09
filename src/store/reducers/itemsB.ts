export interface ItemsBState {
  itemsB: { id: number }[]
}

export enum ItemsBActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export interface ItemsAction {
  type: ItemsBActionType
}

function itemsBReducer(state: ItemsBState, action: ItemsAction): ItemsBState {
  switch (action.type) {
    case ItemsBActionType.ADD:
      return {
        ...state,
        itemsB: [...state.itemsB, { id: state.itemsB.length }],
      }
    case ItemsBActionType.REMOVE:
      return {
        ...state,
        itemsB: state.itemsB.slice(0, -1),
      }
    default:
      throw new Error('Unknown action type')
  }
}

export default itemsBReducer
