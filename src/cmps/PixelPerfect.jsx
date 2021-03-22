import { ItemList } from '../cmps/ItemList'
import { itemService } from '../services/itemService'

export function PixelPerfect() {
  const items = itemService.getItems()
  return (
    <div className="pixel-perfect flex space-between">
      <div className="small-container">
        <h1>A few highlights from our menu</h1>
        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
      </div>
      <ItemList items={items} />
    </div>
  )
}
