import { ItemList } from '../cmps/ItemList'
import { itemService } from '../services/itemService'

export function PixelPerfect() {
  const items = itemService.getItems()
  return (
    <div className="pixel-perfect">
      <ItemList items={items} />
    </div>
  )
}
