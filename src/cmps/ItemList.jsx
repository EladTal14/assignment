import { Item } from './Item'
import { itemService } from '../services/itemService'
export function ItemList({ items }) {
  console.log(items);
  return (
    <div>
      {items.map(item => <Item item={item} key={itemService.makeId()} />)}
    </div>
  )
}
