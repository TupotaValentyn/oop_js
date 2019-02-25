module.exports = class Check {
  constructor () {
    this.products = []
    this.totalCost = 0
    Object.defineProperties(this, {
      'totalCost': {
        writable: false
      },
      'products': {
        writable: false
      }
    })
  }

  getTotalCost () {
    Object.defineProperty(this,
      'totalCost', {
        writable: true
      }
    )
    return this.products.reduce((prev, current) => {
      return prev + current.price
    }, 0)
  }
  getTotalPoints () {
    return this.getTotalCost()
  }

  addProducts (product) {
    Object.defineProperty(this,
      'products', {
        writable: true
      }
    )
    this.products.push(product)
    Object.defineProperty(this,
      'products', {
        writable: false
      }
    )
  }

  get getCheck () {
    return this.products
  }
}
