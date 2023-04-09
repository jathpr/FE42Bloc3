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
    array.map(function (el) {
        if (el.cars) {
            amountCars += el.cars.length;
        }
    });
    return amountCars;
};
console.log(countCars(users));
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
var sortUsers = function (array) {
    var arrayUsers = [];
    array.filter(function (el) {
        if (el.hasEducation === true) {
            arrayUsers.push(el.name);
        }
    });
    return arrayUsers;
};
console.log(sortUsers(users));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var sortUsersByAnimal = function (array) {
    var arrayUsers = [];
    array.filter(function (el) {
        if (el.animals) {
            arrayUsers.push(el.name);
        }
    });
    return arrayUsers;
};
console.log(sortUsersByAnimal(users));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
var getStringOfCars = function (array) {
    var carsArray = [];
    var arrayOfCars = array.map(function (elem) {
        if (elem.cars)
            carsArray.push(elem.cars);
    });
    var stringOfCars = carsArray.join(', ');
    return stringOfCars;
};
console.log(getStringOfCars(users));
