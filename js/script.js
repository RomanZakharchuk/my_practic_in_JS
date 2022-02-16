'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false
};

let firstFilm = prompt("Один із останіх переглянутих фільмів?", "");
let firstRating = prompt("На скільки оціните його?", "");
let secondFilm = prompt("Один із останіх переглянутих фільмів?", "");
let secondRating = prompt("На скільки оціните його?", "");

personalMovieDB.movies[firstFilm] = firstRating;
personalMovieDB.movies[secondFilm] = secondRating;

console.log(personalMovieDB);