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
// 1. Создать строку из имен пользователей через запятую
console.log("1. Создать строку из имен пользователей через запятую");
var getUsers = function (arr) {
    var newArr = arr.map(function (val) { return val.name; });
    var countruesStr = newArr.join(', ');
    return countruesStr;
};
console.log(getUsers(users));
// 2. Посчитать общее количнство машин у пользователей
console.log("\n2. Посчитать общее количнство машин у пользователей");
var totalCars = function (arr) {
    return arr.map(function (user) { return user.cars; }).length;
};
console.log(totalCars(users));
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
console.log("\n3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования");
var isEducation = function (arr) {
    var userList = __spreadArray([], users, true);
    var result = userList.filter(function (user) { return user.hasEducation; });
    return result;
};
console.log(isEducation(users));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
console.log("\n4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных");
var hasAnimals = function (arr) {
    var userList = __spreadArray([], users, true);
    var result = userList.filter(function (user) { return user.animals; });
    return result;
};
console.log(hasAnimals(users));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
console.log("\n5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую");
var carName = function (arr) {
    var carBrands = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var user = arr_1[_i];
        if (user.cars) {
            for (var _a = 0, _b = user.cars; _a < _b.length; _a++) {
                var car = _b[_a];
                if (!carBrands.includes(car)) {
                    carBrands.push(car);
                }
            }
        }
    }
    return carBrands.join(", ");
};
console.log(carName(users));
