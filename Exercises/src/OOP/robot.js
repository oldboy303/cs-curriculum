class Robot {

  constructor (energy) {
    this.coordinates = [0, 0]
    this.energy = energy;
    this.movements = [];
  }

  position() {
    return this.coordinates;
  }

  battery() {
    return this.energy;
  }

  moveUp() {
    this.coordinates[1]++;
    this.movements.push('up');
  }

  moveLeft() {
    this.coordinates[0]--;
    this.movements.push('left');
  }

  history() {
    return this.movements;
  }

}

module.exports = Robot;
