class ParkingLot {
    constructor(spaces) {
        this.spaces = spaces;
        this.slots = new Array(spaces).fill(null);
    }

    vacancies() {
        return this.spaces - this.slots.filter(a => a).length;
    }

    summary() {
        return this.slots.map((space, index) => {
            return !space 
                ? `Position ${ index + 1 }: (empty)` 
                : `Position ${ index + 1 }: ${space}`; 
        })
    }

    park(plate) {
        if (this.vacancies()) this.slots[this.slots.indexOf(null)] = plate;
    }

    leave(plate) {
        this.slots[this.slots.indexOf(plate)] = null;
    }

    compact() {
        let i = this.spaces;
        while (i > 0) {
            if (this.slots[i] && this.slots.indexOf(null) < i) {
                this.slots[this.slots.indexOf(null)] = this.slots[i];
                this.slots[i] = null;
            }
            i--;
        }
    }
}

module.exports = ParkingLot;
