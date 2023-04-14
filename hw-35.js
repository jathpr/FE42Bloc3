var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw", "ford"],
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
console.log('User names:', getUserNames(users));
//     2. Посчитать общее количнство машин у пользователей.
var sumCars = function (users) {
    var carsArr = users.reduce(function (cars, user) {
        cars += user.cars ? user.cars.length : 0;
        return cars;
    }, 0);
    return carsArr;
};
console.log('Sum of cars:', sumCars(users));
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования.
var isEducationed = function (users) {
    var usersArr = users.filter(function (user) { return user.hasEducation; });
    return usersArr;
};
console.log('Have education:', isEducationed(users));
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных.
var isHasAnimals = function (users) {
    var usersArr = users.filter(function (user) { return user.animals; });
    return usersArr;
};
console.log('Have animals:', isHasAnimals(users));
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var getCarNames = function (users) {
    // const isCarArr = users.filter(user => user.cars)
    // const carArr = isCarArr.map(user => user.cars)
    // const carStr = carArr.join (',')
    // return carStr
    var getCars = users.reduce(function (acc, user) { return (user.cars ? __spreadArray(__spreadArray([], acc, true), user.cars, true) : acc); }, []);
    return Array.from(new Set(getCars)).join(', ');
};
console.log('Car brands:', getCarNames(users));
