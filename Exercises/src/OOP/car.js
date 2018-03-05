class Car {
  constructor (mpg) {
    this.mpg = mpg;
    this.gallons = 0;
    this.tripArr = [];
  }

  fill(gallons) {
    this.gallons += gallons;
  }

  drive(miles) {
    this.tripArr.push(miles);
    this.gallons -= miles/this.mpg;
  }

  odometer() {
    return this.tripArr.reduce((a,b) => a + b, 0);
  }

  trips() {
    return this.tripArr.map(t => `${t} miles`);
  }
}

module.exports = Car;