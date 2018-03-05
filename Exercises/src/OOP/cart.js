class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item, quantity = 1) {
        this.items.push({ item, quantity});
        this.totalPrice += item.price * quantity;
    }

    itemizedList() {
        return this.items.map(i => `${ i.item.name } - $${ i.item.price }`);
    }

    itemQuantities() {
        return this.items.map(i => `${ i.item.name } - ${ i.quantity }`);
    }

    onSaleItems() {
        return this.items.filter(i => i.item.onSale)
            .map(i => `${ i.item.name } - $${ i.item.price }`);
    }
}

module.exports = Cart;