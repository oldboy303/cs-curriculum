class Car {
    constructor(mpg) {
        this.mpg = mpg;
        this.gallons = 0;
        this.tripArr = [];
    }

    fill(gallons) {
        this.gallons += gallons;
    }

    drive(distance) {
        this.tripArr.push(distance);
        this.gallons -= distance/this.mpg;
    }

    odometer() {
        return this.tripArr.length > 0 
            ? this.tripArr.reduce((a, b) => a + b)
            : 0;
    }

    trips() {
        return this.tripArr.map(t => `${ t } miles`);
    }
}

module.exports = Car;