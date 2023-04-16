var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var newMovies = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
    {
        id: 3,
        title: "Star Wars",
        year: 1977,
        released: "25 May 1977",
        runtime: "121 min",
        genre: ["Action", "Adventure", "Fantasy"],
        director: "George Lucas",
        writer: "George Lucas",
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
        country: "United States, United Kingdom",
        poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        imdbRating: 8.6,
        imdbVotes: 1259440,
        type: "movie",
        boxOffice: "$460,998,507",
        production: "Lucasfilm Ltd.",
    },
    {
        id: 4,
        title: "Harry Potter and the Half-Blood Prince",
        year: 2009,
        released: "15 Jul 2009",
        runtime: "153 min",
        genre: ["Action", "Adventure", "Family"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort\'s dark past.",
        country: "United Kingdom",
        poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
        imdbRating: 7.6,
        imdbVotes: 492245,
        boxOffice: "$302,305,431",
        production: "Heyday Films, Warner Bros.",
    },
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        released: "16 Nov 2001",
        runtime: "152 min",
        genre: ["Adventure", "Family", "Fantasy"],
        director: "Chris Columbus",
        writer: "J.K. Rowling, Steve Kloves",
        actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
        plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        imdbRating: 7.6,
        imdbVotes: 684604,
        boxOffice: "$318,087,620",
        production: "1492 Pictures, Heyday Films, Warner Brothers",
    }
];
//Task 1 Собрать в массив все жанры фильмов (без повторения)
var getAllGenres = function (movies) {
    var allGenresArrRepeated = movies.reduce(function (allGenres, movie) { return __spreadArray(__spreadArray([], allGenres, true), movie.genre, true); }, []);
    var allGenresObj = new Set(allGenresArrRepeated);
    return Array.from(allGenresObj);
};
console.log('Все жанры фильмов без посторения: ', getAllGenres(newMovies));
//Task 2 Собрать в массив всех актёров всех фильмов (без повторения)
var getAllActors = function (movies) {
    var allActorsArrRepeated = movies.reduce(function (allActors, movie) { return __spreadArray(__spreadArray([], allActors, true), movie.actors, true); }, []);
    var allActorsObj = new Set(allActorsArrRepeated);
    return Array.from(allActorsObj);
};
console.log('Все актёры фильмов без посторения: ', getAllActors(newMovies));
//Task 3 Отсортировать фильмы по рейтингу по убыванию
var sortMoviesByRating = function (movies) {
    var copiedMovies = __spreadArray([], movies, true);
    var sortedMovies = copiedMovies.sort(function (movie1, movie2) { return movie2.imdbRating - movie1.imdbRating; });
    return sortedMovies;
};
console.log('Отсортированные фильмы по рейтингу:', sortMoviesByRating(newMovies));
//Task 4 Создать новый массив, где объекты фильмов будут состоять из следующих полей: id,title,released,plot
var createMoviePreview = function (movies) {
    var moviesPreview = movies.map(function (movie) { return ({ id: movie.id, title: movie.title, released: movie.released, plot: movie.plot }); });
    return moviesPreview;
};
console.log('Новый массив, где объекты фильмов состоят не из всех полей', createMoviePreview(newMovies));
/*Task 5 Функция, которая принимала бы массив фильмов и число. А результатом функции должен быть новый отфильтрованный массив,
 с фильмами, где число равно году выхода фильма */
var findMoviesByYear = function (movies, year) {
    var moviesOfSelectedYear = movies.filter(function (movie) { return movie.year === year; });
    return moviesOfSelectedYear;
};
console.log('Фильмы вышедшие в выбранном году(2001):', findMoviesByYear(newMovies, 2001));
/*Task 6 Функция, которая принимала бы массив фильмов и строку. Результат функции: новый отфильтрованный массив с фильмами,
где строка входит в название фильма*/
var findMoviesByPartTitle = function (movies, incomplTitle) {
    var moviesWithFittingTitle = movies.filter(function (movie) { return movie.title.toLowerCase().includes(incomplTitle.toLowerCase()); });
    return moviesWithFittingTitle;
};
console.log('Фильмы, в название которых входит "Harry Potter": ', findMoviesByPartTitle(newMovies, 'harry Potter'));
/*Task 7 Функция, которая принимала бы массив фильмов и строку. Результат функции: новый отфильтрованный массив с фильмами,
где строка входит в название фильма или сюжет */
var findMoviesByPartTitleorPlot = function (movies, line) {
    var moviesWithFittingTitle = movies.filter(function (movie) { return movie.title.toLowerCase().includes(line.toLowerCase()) || movie.plot.toLowerCase().includes(line.toLowerCase()); });
    return moviesWithFittingTitle;
};
console.log('Фильмы, в название которых входит "and": ', findMoviesByPartTitleorPlot(newMovies, 'and'));
/*Task 8 Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов,2)строка(название поля, например 'title'),
3)Строка/число(значение поля 'Black Widow').А результатом будет отфильтрованный массив, где параметры 2 и 3 равны
в объекте фильма.Например передаём (films,'title','Black Widow') и на конце получаем фильм с id=1, если передаём
  (films,'year',2011),то получаем фильм с id: 2*/
var getMoviesByPropValue = function (movies, property, value) {
    var moviesWithReqPropValue = movies.filter(function (movie) { return movie[property] === value; });
    return moviesWithReqPropValue;
};
console.log('Фильмы с определённым значением их свойства: ', getMoviesByPropValue(newMovies, 'title', 'Black Widow'));
console.log('Фильмы с определённым значением их свойства: ', getMoviesByPropValue(newMovies, 'year', 2011));
