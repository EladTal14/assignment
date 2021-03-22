import { Item } from './Item'

export function ItemList({ items }) {
  return (
    <div className="item-list flex  ">
      {items.map(item => <Item item={item} key={item.id} />)}
    </div>
  )
}
