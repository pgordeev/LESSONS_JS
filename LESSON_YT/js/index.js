/* const numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`);
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};
 */

let numberOfFilms;

function start() {
  numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`);
  while (numberOfFilms == false || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели`);
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let index = 0; index < 2; index++) {
    const lastMovie = prompt(`Один из последних просмотренных фильмов?`);
    ball = prompt(`На сколько его оцените от 1 до 10?`);
    if (
      lastMovie != false &&
      lastMovie.length < 50 &&
      +ball <= 10 &&
      +ball >= 1 &&
      ball != false
    ) {
      personalMovieDB.movies[lastMovie] = ball;
    } else {
      index--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert(`Просмотрено малов фильмов`);
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert(`Вы классический зритель`);
  } else {
    alert(`Вы киноман`);
  }
}

function writeYourGenres() {
  for (let index = 1; index <= 3; index++) {
    const genre = prompt(`Ваш любимый жанр под номером ${index}`);
    if (genre != false && genre.length < 50) {
      personalMovieDB.genres.push(genre);
    } else {
      index--;
    }
  }
  1;
}
writeYourGenres();

function showMyDB(obj) {
  if (obj.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB);
