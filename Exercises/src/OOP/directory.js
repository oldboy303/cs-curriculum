class Directory {

    constructor(name) {
      this.name = name;
      this.files = {};
    }
  
    write (name, body) {
      if (!this.files[name]) this.files[name] = {};
      this.files[name].body = body;
    }
  
    ls () {
      return Object.keys(this.files).sort();
    }
  
    ls_la () {
      return this.ls().map(name => `${ name } - ${ this.files[name].body.length }`);
    }
  
    cat (name) {
      return this.files[name].body;
    }
  
    mv (src, target) {
      this.files[target] = this.files[src];
      delete this.files[src];
    }
  
    cp (src, target) {
      this.files[target] = { body: this.files[src].body };
    }
  
    ln_s (src, target) {
      this.files[target] = this.files[src];
    }
  
  }
  
  module.exports = Directory;