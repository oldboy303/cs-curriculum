var Song = require('./song');

class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    isEmpty() {
        return this.songs.length === 0 ? true : false;
    }

    addSong(song) {
        this.songs.push(song);
    }

    songNames() {
        return this.songs.map(song => song.name) || [];
    }

    totalDuration() {
        return this.songs.length === 0
            ? 0
            : this.songs.map(s => s.duration).reduce((a, b) => a + b);
    
    }

    swap(song1, song2) {
        let idx1 = this.songs.indexOf(song1);
        let idx2 = this.songs.indexOf(song2);
        let tmp = this.songs[idx1];
        this.songs[idx1] = this.songs[idx2];
        this.songs[idx2] = tmp;
      }

      removeSong(song) {
          this.songs.splice(this.songs.indexOf(song), 1);
      }
}

module.exports = Playlist;
