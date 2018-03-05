var Item = require('./item');

class Cart {

  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }

  addItem(item, quantity = 1) {
    this.totalPrice += item.price * quantity;
    this.items.push({item, quantity});
  }

  itemizedList() {
    return this.items.map(i => `${i.item.name} - $${i.item.price.toFixed(1)}`);
  }

  itemQuantities() {
    return this.items.map(i => `${i.item.name} - ${i.quantity}`);
  }

  onSaleItems() {
    return this.items.filter(i => i.item.onSale)
      .map(i => `${i.item.name} - $${i.item.price.toFixed(1)}`);
  }
}

module.exports = Cart;