class TollRoad {
    constructor(price) {
        this.price = price;
        this.tolls = [];
        this.payments = [];
    }

    charge(plate, date) {
        this.tolls.push({ plate, date });
    }

    balance(plate) {
        let credits = 0;
        if (this.payments.filter(p => p.plate === plate).length) {
            credits += this.payments.filter(p => p.plate === plate)
                .map(p => p.amount).reduce((a, b) => a + b);
        }
        return this.tolls.filter(p => p.plate === plate).length * this.price - credits;
    }

    history(plate) {
        return this.tolls.filter(p => p.plate === plate)
            .map(p => `Charged $${ this.price } on ${ p.date }`).reverse();
    }

    pay(plate, amount) {
        this.payments.push({ plate, amount });
    }
}

module.exports = TollRoad;
