
type User = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: User[] = [
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

/* TASK 1 */
// Создать строку из имен пользователей через запятую
const usersToString = (arr: User[]) => {
    const newString = arr.map((val)=>val.name)
    const userString = newString.join(', ')
    return userString
}
console.log(usersToString(users))

/* TASK 2 */
// Посчитать общее количнство машин у пользователей
const countCarsNumber = (arr: User[]) => {
    const newArray = arr.map((val)=>val.cars).length
    return newArray
}
console.log(countCarsNumber(users))

/* TASK 3 */
// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const sortUsersEducation = (arr: User[]) => {
    const newArray = arr.sort((a,b)=>+b.hasEducation - +a.hasEducation)
    return newArray
}
console.log(sortUsersEducation(users))

/* TASK 4 */
// Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const filterUsersAnimals = (arr: User[]) => {
    const newArray = arr.filter((user) => user.animals)
    return newArray
}
console.log(filterUsersAnimals(users))

/* TASK 5 */
// Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
const outputCarsToString = (arr: User[]) => {
    const filterIfHasCars = arr.filter((user) => user.cars)
    const carsArray = filterIfHasCars.map((val) => val.cars)
    const arrToSting = carsArray.join(', ')
    return arrToSting
}
console.log(outputCarsToString(users))


































































































































































































































































































































































































































































































































































































































































































































































