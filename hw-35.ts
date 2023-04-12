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

// 1. Создать строку из имен пользователей через запятую

console.log("1. Создать строку из имен пользователей через запятую")

const getUsers = (arr: User[]) => {
    const newArr = arr.map((val) => val.name)
    const countruesStr = newArr.join(', ')
    return countruesStr
}

console.log(getUsers(users))

// 2. Посчитать общее количнство машин у пользователей

console.log("\n2. Посчитать общее количнство машин у пользователей")

const totalCars = (arr: User[]): number => {
    return arr.map(user => user.cars).length
}

console.log(totalCars(users))

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

console.log("\n3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования")

const isEducation = (arr: User[]) => {
    const userList = [...users];
    const result = userList.filter((user) => user.hasEducation)
    return result
}

console.log(isEducation(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

console.log("\n4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных")

const hasAnimals = (arr: User[]) => {
    const userList = [...users];
    const result = userList.filter((user) => user.animals)
    return result
}

console.log(hasAnimals(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

console.log("\n5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую")

const carName = (arr: User[]) => {
    const carBrands: string[] = [];

    for (const user of arr) {
        if (user.cars) {
            for (const car of user.cars) {
                if (!carBrands.includes(car)) {
                    carBrands.push(car);
                }
            }
        }
    }

    return carBrands.join(", ");
}

console.log(carName(users))
