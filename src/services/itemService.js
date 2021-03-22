import { items } from '../item'

function getItems() {
  const newItems = JSON.parse(JSON.stringify(items))
  return newItems
}
function makeId() {
  return Math.random()
}
export const itemService = {
  getItems,
  makeId
}