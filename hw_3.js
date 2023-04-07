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
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    },
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
    }
];
// 1. Создать строку из имен пользователей через запятую
var getNamesString = function (users) {
    var userNamesArray = users.map(function (user) { return user.name; });
    return userNamesArray.join(', ');
};
console.log(getNamesString(users));
// 2. Посчитать общее количество машин у пользователей
var getCarsTotalNumber = function (users) { return users.reduce(function (carsTotalNumber, user) {
    if (user.cars) {
        return carsTotalNumber + user.cars.length;
    }
    return carsTotalNumber;
}, 0); };
console.log(getCarsTotalNumber(users));
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
var sortUsersByEducation = function (users) {
    var usersCopy = __spreadArray([], users, true);
    usersCopy.sort(function (user1, user2) { return +user2.hasEducation - +user1.hasEducation; });
    return usersCopy;
};
console.log(sortUsersByEducation(users));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var sortUsersByAnimalsExisting = function (users) {
    var usersCopy = __spreadArray([], users, true);
    usersCopy.sort(function (user1, user2) {
        if (user1.animals && !user2.animals)
            return -1;
        if (!user1.animals && user2.animals)
            return 1;
        return 0;
    });
    return usersCopy;
};
console.log(sortUsersByAnimalsExisting(users));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
var getCarsBrand = function (users) {
    var usersWithCarsArray = users.filter(function (user) { return Boolean(user.cars) === true; });
    var usersCarsArray = usersWithCarsArray.map(function (user) { return user.cars; });
    var allCarsArray = [];
    for (var i = 0; i < usersCarsArray.length; i++) {
        allCarsArray.push(usersCarsArray[i].join(', '));
    }
    return allCarsArray.join(', ');
};
console.log(getCarsBrand(users));
