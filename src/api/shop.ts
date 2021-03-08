/**
 * Mocking client-server processing
 */
interface IProcuctItem {
  id: number
  title: string
  price: number
  inventory: number
}

const _products: IProcuctItem[] = [
  { 'id': 1, 'title': 'Apple🍎', 'price': 10, 'inventory': 2 },
  { 'id': 2, 'title': 'Banana🍌', 'price': 3, 'inventory': 10 },
  { 'id': 3, 'title': 'Orange🍊', 'price': 6, 'inventory': 5 }
]

export default {
  getProducts (cb: Function) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products: IProcuctItem[], cb: Function, errorCb: Function) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}