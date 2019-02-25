const Check = require('./Check')
const Product = require('./Product')

class CheckoutService {
  constructor () {
    this.products = []
  }

  openCheck () {
    this.check = new Check()
  }

  closeCheck () {
    const timeCheck = this.check
    this.check = null
    return timeCheck
  }

  addProduct (product) {
    if (!this.check) {
      this.openCheck()
    }
    this.check.addProducts(product)
  }
}

const checkoutService = new CheckoutService()
checkoutService.openCheck()

checkoutService.addProduct(new Product(11, 'flint'))
checkoutService.addProduct(new Product(89, 'gorilka 0.7'))
checkoutService.addProduct(new Product(120, 'varenka-kilo'))
const check1 = checkoutService.closeCheck()

checkoutService.addProduct(new Product(120, 'varenka-kilo'))
const check2 = checkoutService.closeCheck()

console.log(check1.getTotalCost())
console.log(check2.getTotalCost())
