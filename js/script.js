'use strict';

let numberOfFilms;

function start(hidden) {
  hidden = prompt("Скільки фільмів ви вже подивилися?", "");

  while (hidden == '' || hidden == null || isNaN(hidden)) {
    hidden = prompt("Скільки фільмів ви вже подивилися?", "");
  }
}

start(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms(hidden) {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один із останіх переглянутих фільмів?", "");
    const b = prompt("На скільки оціните його?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      hidden[a] = b;
      console.log("Супер!");
    } else {
      console.log("Error!");
      i--;
    }
  }
}

rememberMyFilms(personalMovieDB.movies);

function detectPersonalLevel(hidden) {
  if (hidden < 10) {
    console.log("Ви подивилися мало фільмів.");
  } else if (hidden > 10 && hidden < 30) {
    console.log("Ви класний глядач.");
  } else if (hidden > 30) {
    console.log("Ви кіноман.");
  } else {
    console.log("Сталася помилка.");
  }
}

detectPersonalLevel(personalMovieDB.count);

function showDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showDB(personalMovieDB.privat);

function writeYourGenres(hidden) {
  for (let i = 1; i <= 3; i++) {
    hidden[i - 1] = prompt(`Ваш улюблений жанр під порядковим ${i}`, "");
  }
}

writeYourGenres(personalMovieDB.genres);