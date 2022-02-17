'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один із останіх переглянутих фільмів?", "");
  const b = prompt("На скільки оціните його?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Супер!");
  } else {
    console.log("Error!");
    i--;
  }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log("Ви подивилися мало фільмів.");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Ви класний глядач.");
} else if (personalMovieDB.count > 30) {
  console.log("Ви кіноман.");
} else {
  console.log("Сталася помилка.");
}