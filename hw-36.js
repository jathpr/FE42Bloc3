var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var films = [
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
// 1. Собрать в массив все жанры фильмов ( без повторений)
console.log("1.\n");
var getGenre = function (array) {
    var newArr = array.map(function (film) { return film.genre; });
    var genresArr = newArr.reduce(function (acc, genres) { return __spreadArray(__spreadArray([], acc, true), genres, true); }, []);
    var result = genresArr.filter(function (genre, index, genres) { return genres.indexOf(genre) === index; });
    return result;
};
console.log(getGenre(films));
// 2. Собрать в массив всех актеров всех фильмов (без повторений)
console.log("\n2.\n");
var getActors = function (array) {
    var newArr = array.map(function (film) { return film.actors; });
    var actorsArr = newArr.reduce(function (acc, actors) { return __spreadArray(__spreadArray([], acc, true), actors, true); }, []);
    var result = actorsArr.filter(function (actor, index, actors) { return actors.indexOf(actor) === index; });
    return result;
};
console.log(getActors(films));
// 3. 
console.log('\n3.\n');
var getSortedRaiting = function (array) {
    return array.sort(function (a, b) { return b.imdbRating - a.imdbRating; });
};
console.log(getSortedRaiting(films));
// 4. 
console.log('\n4.\n');
var getNewFilmsArray = function (array) {
    return array.map(function (film) { return ({ id: film.id, title: film.title, released: film.released, plot: film.plot }); });
};
console.log(getNewFilmsArray(films));
// 5. 
console.log('\n5.\n');
var getFilmYear = function (array, year) {
    return array.filter(function (film) { return film.year === year; });
};
console.log(getFilmYear(films, 2011));
// 6. 
console.log('\n6.\n');
var hasStrNameFilm = function (array, str) {
    return array.filter(function (film) { return film.title.includes(str); });
};
console.log(hasStrNameFilm(films, 'Potter'));
// 7. 
console.log('\n7.\n');
var hasNameFilm = function (array, str) {
    return array.filter(function (film) { return film.title.includes(str) || film.plot.includes(str); });
};
console.log(hasNameFilm(films, 'Star'));
// 8. 
console.log('\n8.\n');
function filterFilmsByProperty(films, property, value) {
    // const result = films.filter(film => film[property] === value);
    var result = films.filter(function (film) {
        return film[property] === value;
    }).map(function (film) { return "id = ".concat(film.id); }).join('&');
    return result;
}
console.log(filterFilmsByProperty(films, 'title', 'Black Widow'));
