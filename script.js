/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("kam kino didaki");
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("meshad normalni");
  } else if (personalMoviesDB.count >= 30) {
    console.log("vapwe zur malades");
  } else {
    console.log("oshibka");
  }
}

// detectPersonalLevel();

function rememberMyFilms() {
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
}
// rememberMyFilms();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}
showMyDb(personalMoviesDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMoviesDB.genres[i - 1] = genre;
  }
}

writeYourGenres();
