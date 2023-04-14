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
var filterUsersByEducation = function (users) {
    var filteredUsers = users.filter(function (user) { return user.hasEducation; });
    return filteredUsers;
};
console.log(filterUsersByEducation(users));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
var sortUsersByAnimalsExisting = function (users) {
    var filteredUsers = users.filter(function (user) { return user.animals; });
    return filteredUsers;
};
console.log(sortUsersByAnimalsExisting(users));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
var getCarsBrand = function (users) {
    var carsSet = users.reduce(function (carsSet, user) {
        var _a;
        (_a = (user.cars)) === null || _a === void 0 ? void 0 : _a.forEach(function (car) {
            if (!carsSet.has(car)) {
                carsSet.add(car);
            }
        });
        return carsSet;
    }, new Set());
    var carsArr = Array.from(carsSet);
    return carsArr.join(', ');
};
console.log(getCarsBrand(users));
