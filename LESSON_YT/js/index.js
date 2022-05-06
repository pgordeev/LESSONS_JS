let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели`);
    while (personalMovieDB.count == false || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели`);
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      alert(`Просмотрено малов фильмов`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert(`Вы классический зритель`);
    } else {
      alert(`Вы киноман`);
    }
  },
  writeYourGenres: () => {
    for (let index = 1; index < 2; index++) {
      const genres = prompt(`Ваш любимый жанр под номером ${index}`);
      if (genres != false) {
        personalMovieDB.genres = genres.split(', ');
      } else {
        index--;
      }
    }
    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Любимый жанр №${index + 1} - это ${value}`);
    });
  },
  showMyDB: () => {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
};

/* function copy(mainObj) {
  const objCopy = {};
  for (const key in mainObj) {
    if (Object.hasOwnProperty.call(mainObj, key)) {
      objCopy[key] = mainObj[key];
    }
  }
  return objCopy;
} */

// const newPersonalMovieDB = Object.assign(personalMovieDB);

/* const variableObject = {
  variableName: {
    fieldName: 'Austin',
  },
};

function getDescendantProp(obj, desc) {
  var arr = desc.split('.');

  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}
const newObj = getDescendantProp(
  variableObject,
  variableObject.variableName.fieldName
);
 */
