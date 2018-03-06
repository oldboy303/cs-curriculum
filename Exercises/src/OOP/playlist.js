class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    isEmpty() {
        return this.songs.length ? false : true;
    }

    addSong(song) {
        this.songs.push(song);
    }

    removeSong(song) {
        this.songs.splice(this.songs.indexOf(song), 1);
    }

    songNames() {
        return this.songs.map(s => s.name);
    }

    totalDuration() {
        return this.songs.length 
            ? this.songs.map(s => s.duration).reduce((a, b) => a + b)
            : 0;
    }

    swap(song1, song2) {
        let idx1 = this.songs.indexOf(song1);
        let idx2 = this.songs.indexOf(song2);
        let tmp = this.songs[idx1];
        this.songs[idx1] = this.songs[idx2];
        this.songs[idx2] = tmp;
    }
}

module.exports = Playlist;