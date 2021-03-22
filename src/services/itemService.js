import { items } from '../item'

function getItems() {
  const newItems = items.map((item, idx) => {
    item.id = makeId() + ''
    item.imgUrl = `menu-item${idx + 1}.jpg`
    return item
  })

  return newItems
}
function makeId() {
  return Math.random()
}
export const itemService = {
  getItems,
  makeId
}