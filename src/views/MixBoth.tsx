import { useContext } from 'react'
import { GlobalContext } from '@store/globalState'
import { ItemsBActionType } from '@/store/reducers/itemsB'

function MixBoth() {
  const { itemsA, setItemsA } = useContext(GlobalContext)
  const { itemsB, dispatchItemsB } = useContext(GlobalContext)

  type EventType = 'itemsA' | 'itemsB'
  const onAdd = (type: EventType) => {
    if (type === 'itemsA') {
      setItemsA(itemsA.concat({ id: itemsA.length }))
    } else if (type === 'itemsB') {
      dispatchItemsB({ type: ItemsBActionType.ADD })
    }
  }
  const onRemove = (type: EventType) => {
    if (type === 'itemsA') {
      setItemsA(itemsA.slice(0, -1))
    } else if (type === 'itemsB') {
      dispatchItemsB({ type: ItemsBActionType.REMOVE })
    }
  }

  return (
    <main>
      <h4 className="py-3">Mix useContext with useState and useReducer</h4>
      <div className="d-flex gap-4">
        <div>
          <h5>useState</h5>
          <button onClick={() => onAdd('itemsA')}>Add</button>
          <button onClick={() => onRemove('itemsA')}>Remove</button>
          {itemsA.map((item, idx) => {
            return <div key={idx}>ItemsA {item.id}</div>
          })}
        </div>
        <div>
          <h5>useReducer</h5>
          <button onClick={() => onAdd('itemsB')}>Add</button>
          <button onClick={() => onRemove('itemsB')}>Remove</button>
          {itemsB.map((item, idx) => {
            return <div key={idx}>ItemsB {item.id}</div>
          })}
        </div>
      </div>
    </main>
  )
}

export default MixBoth
