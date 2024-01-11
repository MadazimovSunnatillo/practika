"use strict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },

  detectPersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log("kam kino didaki");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log("meshad normalni");
    } else if (personalMoviesDB.count >= 30) {
      console.log("vapwe zur malades");
    } else {
      console.log("oshibka");
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?"),
        b = +prompt("На сколько оцените его?");

      personalMoviesDB.movies[a] = b;

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = `Ваш любимый жанр под номером ${i}`;

      if (genre === "" || genre === null) {
        console.log("Вы ввели некорректный данные или не ввели их вовсе");
      } else {
        personalMoviesDB.genres[i - 1] = genre;
      }
    }
    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1}- это`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },
};
