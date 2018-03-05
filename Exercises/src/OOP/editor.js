module.exports = class Editor {
    constructor() {
        this.units = [];
        this.undos = [];
    }

    write(text) {
        this.units.push({ text });
    }

    toString() {
        return this.units.reduce((a, b) => b.oV ? a.split(b.oV).join(b.nV) : a + b.text, '')
    }

    undo() {
       this.undos.push(this.units.pop());
    }

    redo() {
        this.units.push(this.undos.pop());
    }

    replace(oV, nV) {
        this.units.push({ oV, nV });
    }

}
