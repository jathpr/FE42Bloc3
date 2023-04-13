type User = {
    name: string,
    phone: string | number,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
}
const users = [
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
]
//     1. Создать строку из имен пользователей через запятую.
const getUserNames = (users: User[]) => {
    const namesArr = users.map(user => user.name)
    const namesStr = namesArr.join(', ')
    return namesStr
}
console.log(getUserNames(users))
//     2. Посчитать общее количнство машин у пользователей.
const sumCars = (users: User[]) => {
    const carsArr = users.map(user => user.cars)
    return carsArr.length
}
console.log(sumCars(users))
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования.
const isEducationed = (users: User[]) => {
    const usersArr = users.filter(user => user.hasEducation)
    return usersArr
}
console.log(isEducationed(users));

//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных.
const isHasAnimals = (users: User[]) => {
    const usersArr = users.filter(user => user.animals)
    return usersArr
}
console.log(isHasAnimals(users));
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
const getCarNames = (users: User[]) => {
    // const isCarArr = users.filter(user => user.cars)
    // const carArr = isCarArr.map(user => user.cars)
    // const carStr = carArr.join (',')
    // return carStr
    const getCars = users.reduce(
        (acc, user) => (user.cars ? [...acc, ...user.cars] : acc), []);
    return Array.from(new Set(getCars)).join(', ')
}
console.log(getCarNames(users));