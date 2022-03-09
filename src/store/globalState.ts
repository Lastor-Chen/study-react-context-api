import { createContext } from 'react'
import type { ItemsBState, ItemsAction } from '@/store/reducers/itemsB'

export interface GlobalState {
  itemsA: { id: number }[]
  setItemsA(value: this['itemsA']): void
  itemsB: ItemsBState['itemsB']
  dispatchItemsB(value: ItemsAction): void
}

export const GlobalContext = createContext<GlobalState>({
  itemsA: [],
  setItemsA() {},
  itemsB: [],
  dispatchItemsB() {},
})
