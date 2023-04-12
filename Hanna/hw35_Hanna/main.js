var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
/* TASK 1 */
// Создать строку из имен пользователей через запятую
var usersToString = function (arr) {
    var newString = arr.map(function (val) { return val.name; });
    var userString = newString.join(', ');
    return userString;
};
console.log(usersToString(users));
/* TASK 2 */
// Посчитать общее количнство машин у пользователей
var countCarsNumber = function (arr) {
    var newArray = arr.map(function (val) { return val.cars; }).length;
    return newArray;
};
console.log(countCarsNumber(users));
/* TASK 3 */
// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
var sortUsersEducation = function (arr) {
    var newArray = arr.sort(function (a, b) { return +b.hasEducation - +a.hasEducation; });
    return newArray;
};
console.log(sortUsersEducation(users));
/* TASK 4 */
// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var filterUsersAnimals = function (arr) {
    var newArray = arr.filter(function (user) { return user.animals; });
    return newArray;
};
console.log(filterUsersAnimals(users));
/* TASK 5 */
// Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var outputCarsToString = function (arr) {
    var filterIfHasCars = arr.filter(function (user) { return user.cars; });
    var carsArray = filterIfHasCars.map(function (val) { return val.cars; }).join(', ');
    var arrToSting = carsArray.join(', ');
    return arrToSting;
};
console.log(outputCarsToString(users));
