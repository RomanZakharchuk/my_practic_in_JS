'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = prompt("Скільки фільмів ви вже подивилися?", "");

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = prompt("Скільки фільмів ви вже подивилися?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один із останіх переглянутих фільмів?", "");
      const b = prompt("На скільки оціните його?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        this.movies[a] = b;
        console.log("Супер!");
      } else {
        console.log("Error!");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (this.count < 10) {
      console.log("Ви подивилися мало фільмів.");
    } else if (this.count > 10 && this.count < 30) {
      console.log("Ви класний глядач.");
    } else if (this.count > 30) {
      console.log("Ви кіноман.");
    } else {
      console.log("Сталася помилка.");
    }
  },
  showDB: function () {
    if (!this.privat) {
      console.log(this);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const filmGenre = prompt(`Ваш улюблений жанр під порядковим ${i}`, "");

      if (filmGenre != null && filmGenre != "") {
        this.genres[i - 1] = filmGenre;
        console.log("Yes!");
      } else {
        console.log("Not Yes!");
        i--;
      }
    }

    this.genres.forEach((item, i) => {
      console.log(`Улюблений жанр ${i + 1} - це ${item}`);
    })
  },
  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = true;
    } else {
      this.privat = false;
    }
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();