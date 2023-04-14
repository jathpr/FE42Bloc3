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
var getNameString = function (array) {
    var arrayOfUsers = array.map(function (value) { return value.name; });
    var stringOfUsers = arrayOfUsers.join(', ');
    return stringOfUsers;
};
console.log("🚀 ~ file: hw-35.ts:41 ~ getNameString:", getNameString(users));
// 2. Посчитать общее количeство машин у пользователей
var countCars = function (array) {
    var amountCars = 0;
    array.forEach(function (user) {
        if (user.cars) {
            amountCars += user.cars.length;
        }
    });
    return amountCars;
};
console.log(countCars(users));
// const countCars = (array: User[]) => {
//     let amountCars = 0;
//     array.map(el => {
//         if (el.cars) {
//             amountCars += el.cars.length
//         }
//     }
//     );
//     return amountCars
// }
// console.log(countCars(users));
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
var sortUsers = function (array) { return array.filter(function (user) { return user.hasEducation; }); };
console.log(sortUsers(users));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var sortUsersByAnimal = function (array) { return array.filter(function (user) { return user.animals; }); };
console.log(sortUsersByAnimal(users));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
var getStringOfCars = function (array) {
    var arr = array.reduce(function (acc, user) { return (user.cars ? __spreadArray(__spreadArray([], acc, true), user.cars, true) : acc); }, []).toString();
    return arr;
};
console.log(getStringOfCars(users));
