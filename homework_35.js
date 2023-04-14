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
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true,
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true,
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false,
    },
];
// 1. Создать строку из имен пользователей через запятую
var getUsernameString = function (users) {
    var newArr = users.map(function (val) { return val.name; });
    var usernameStr = newArr.join(", ");
    return usernameStr;
};
console.log(getUsernameString(users));
// 2. Посчитать общее количнство машин у пользователей
var getAmountCars = function (users) {
    var arrCars = [];
    users.forEach(function (user) {
        if (user.cars) {
            arrCars.push(user.cars);
        }
    });
    return arrCars.reduce(function (acc, arrCars) { return __spreadArray(__spreadArray([], acc, true), arrCars, true); }, []).length;
};
console.log(getAmountCars(users), "cars");
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
var getUsersWithEducation = function (users) {
    return users.filter(function (user) { return user.hasEducation; });
};
console.log(getUsersWithEducation(users), "with education");
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var getUsersWithAnimals = function (array) {
    return array.filter(function (user) { return user.animals; });
};
console.log(getUsersWithAnimals(users), "with animals");
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var getCars = function (array) {
    var arrCars = [];
    array.forEach(function (user) {
        if (user.cars) {
            arrCars.push(user.cars);
        }
    });
    return arrCars.toString();
};
console.log(getCars(users));
