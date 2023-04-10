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
var getUsernameString = function (array) {
    var newArr = array.map(function (val) { return val.name; });
    var usernameStr = newArr.join(', ');
    return usernameStr;
};
console.log(getUsernameString(users));
// 2. Посчитать общее количнство машин у пользователей
var getAmountCars = function (array) {
    var arrCars = [];
    array.forEach(function (element) {
        if (element.cars) {
            arrCars.push(element.cars);
        }
    });
    var resultArr = [];
    return resultArr.concat.apply(resultArr, arrCars).length;
};
console.log(getAmountCars(users), 'cars');
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
var getUsersWithEducation = function (array) {
    var nextUsers = [];
    array.filter(function (item) {
        if (item.hasEducation === true) {
            nextUsers.push(item.name);
        }
    });
    return nextUsers;
};
console.log(getUsersWithEducation(users), 'with education');
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var getUsersWithAnimals = function (array) {
    var usersWithAnimals = [];
    array.filter(function (item) {
        if (item.animals) {
            usersWithAnimals.push(item.name);
        }
    });
    return usersWithAnimals;
};
console.log(getUsersWithAnimals(users), 'with animals');
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var getCars = function (array) {
    var arrCars = [];
    array.map(function (element) {
        if (element.cars) {
            arrCars.push(element.cars);
        }
    });
    return arrCars.toString();
};
console.log(getCars(users));
