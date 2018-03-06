class Editor {

    constructor() {
      this.undoneCommands = [];
      this.commands = [];
    }
  
    write(text) {
      this.commands.push({text});
    }
  
    toString() {
      return this.commands.reduce((a, b) => {
        if (b.find) return a.split(b.find).join(b.replace)
        return a + b.text;
      }, '')
    }
  
    undo() {
      this.undoneCommands.push(this.commands.pop());
    }
  
    redo() {
      this.commands.push(this.undoneCommands.pop());
    }
  
    replace(find, replace) {
      this.commands.push({find, replace});
    }
  
  }

  module.exports = Editor;