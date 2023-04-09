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
//     1. Создать строку из имен пользователей через запятую.
var getUserNames = function (users) {
    var namesArr = users.map(function (user) { return user.name; });
    var namesStr = namesArr.join(', ');
    return namesStr;
};
console.log(getUserNames(users));
//     2. Посчитать общее количнство машин у пользователей.
var sumCars = function (users) {
    var carsArr = users.map(function (user) { return user.cars; });
    return carsArr.length;
};
console.log(sumCars(users));
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования.
var isEducationed = function (users) {
    var usersArr = users.filter(function (user) { return user.hasEducation; });
    return usersArr;
};
console.log(isEducationed(users));
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных.
var isHasAnimals = function (users) {
    var usersArr = users.filter(function (user) { return user.animals; });
    return usersArr;
};
console.log(isHasAnimals(users));
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var getCarNames = function (users) {
    var isCarArr = users.filter(function (user) { return user.cars; });
    var carArr = isCarArr.map(function (user) { return user.cars; });
    var carStr = carArr.join(',');
    return carStr;
};
console.log(getCarNames(users));
