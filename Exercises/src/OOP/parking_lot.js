class ParkingLot {
    constructor(spaces) {
        this.spaces = spaces;
        this.lotMap = new Array(spaces).fill(null);
    }

    vacancies() {
        return this.spaces - this.lotMap.filter(p => p).length;
    }

    summary() {
        return this.lotMap.map((p, i) => `Position ${ i + 1 }: ${ p || '(empty)' }`);
    }

    park(plate) {
        this.lotMap[this.lotMap.indexOf(null)] = plate;
    }

    leave(plate) {
        this.lotMap[this.lotMap.indexOf(plate)] = null;
    }

    compact() {
        for (let i = this.lotMap.length; i-- ;) {
            let firstNull = this.lotMap.indexOf(null);
            if (this.lotMap[i] && firstNull < i) {
              this.lotMap[firstNull] = this.lotMap[i];
              this.lotMap[i] = null;
            }
         }
    }

}

module.exports = ParkingLot;