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
// Task 1:
var getUsernameString = function (arr) {
    var nameArr = [];
    arr.forEach(function (element) {
        nameArr.push(element.name);
    });
    return console.log(nameArr.join(', '));
};
getUsernameString(users);
// Task 2:
var getSumUsersCar = function (arr) {
    var sumCars = 0;
    var carsArr = [];
    arr.forEach(function (element) {
        if (element.cars !== undefined) {
            element.cars.forEach(function (element) {
                carsArr.push(element);
            });
        }
    });
    sumCars = carsArr.length;
    return console.log("users have a total of ".concat(sumCars, " cars"));
};
getSumUsersCar(users);
// Task 3:
var getEducationUsers = function (arr) {
    var educationUsers = [];
    arr.forEach(function (element) {
        if (element.hasEducation === true) {
            educationUsers.push(element.name);
        }
    });
    return console.log("users: ".concat(educationUsers.join(', '), " has education"));
};
getEducationUsers(users);
// Task 4:
var getAnimalsUsers = function (arr) {
    var animalsUser = [];
    arr.forEach(function (element) {
        if (element.animals !== undefined) {
            animalsUser.push(element.name);
        }
    });
    return console.log("users: ".concat(animalsUser.join(', '), " has animals"));
};
getAnimalsUsers(users);
// Task 5:
var getStringUsersCars = function (arr) {
    var usersCar = [];
    var stringCars = '';
    arr.forEach(function (element) {
        if (element.cars !== undefined) {
            usersCar.push(element.cars.join(', '));
        }
    });
    stringCars = usersCar.join(', ');
    return console.log(stringCars);
};
getStringUsersCars(users);
