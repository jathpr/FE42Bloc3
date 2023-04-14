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
//Task 1: Создать строку из имен пользователей через запятую
var getNamesString = function (array) {
    var names = array.map(function (user) { return user.name; });
    var namesStr = names.join(', ');
    return namesStr;
};
console.log('#1: Строка из имен пользователей: ', getNamesString(users));
//Task 2: Посчитать общее количнство машин у пользователей
var calcCars = function (array) {
    var carsCount = array.reduce(function (count, user) {
        count += user.cars ? user.cars.length : 0;
        return count;
    }, 0);
    return carsCount;
};
console.log('#2 Общее количество машин: ', calcCars(users));
/*Task 3: Создать функцию, которая бы принимала массив пользователей
и отфильтровывала пользователей на наличие образования*/
var findUsersByEducation = function (array) {
    var usersWithEducation = array.filter(function (user) { return user.hasEducation; });
    var usersWithoutEducation = array.filter(function (user) { return !user.hasEducation; });
    console.log('#3.1 Пользователи с образованием: ', usersWithEducation);
    console.log('#3.2 Пользователи без образования: ', usersWithoutEducation);
};
findUsersByEducation(users);
/*Task 4: Создать функцию, которая бы принимала массив пользователей
и отфильтровывала пользователей на наличие животных */
var findUsersByAnimals = function (array) {
    var usersWithAnimal = array.filter(function (user) { return user.hasOwnProperty('animals'); });
    var usersWithoutAnimal = array.filter(function (user) { return !user.hasOwnProperty('animals'); });
    console.log('#4.1 Пользователи с животным: ', usersWithAnimal);
    console.log('#4.2 Пользователи без животного: ', usersWithoutAnimal);
};
findUsersByAnimals(users);
/*Task 5: Создать функцию, которая бы принимала массив пользователей
и отдавала бы  строку с названиями марок автомобилей через запятую*/
var getCarsString = function (array) {
    var allDrivers = array.filter(function (user) { return 'cars' in user; });
    var allCarsArr = allDrivers.map(function (user) { var _a; return (_a = user.cars) === null || _a === void 0 ? void 0 : _a.join(', '); });
    var allCarsStr = allCarsArr.join(', ');
    return allCarsStr;
};
console.log('#5 Марки автомобилей через запятую: ', getCarsString(users));
