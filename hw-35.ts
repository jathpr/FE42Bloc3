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

const getUsers = (users: User[]) => {
    const newArr = users.map((val) => val.name)
    const countruesStr = newArr.join(', ')
    return countruesStr
}

console.log(getUsers(users))

// 2. Посчитать общее количнство машин у пользователей

console.log("\n2. Посчитать общее количнство машин у пользователей")

const totalCars = (users: User[]) => {
    return users.reduce((acc, user) => {
        if (user.cars) {
            return acc + user.cars.length
        }
        return acc
    }, 0)
}

console.log(totalCars(users))

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

console.log("\n3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования")

const usersEducation = (users: User[]) => {
    const result = users.filter((user) => user.hasEducation)
    return result
}

console.log(usersEducation(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

console.log("\n4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных")

const hasAnimals = (users: User[]) => {
    const result = users.filter((user) => user.animals)
    return result
}

console.log(hasAnimals(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

console.log("\n5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую")

const carName = (users: User[]) => {
    const carBrands: string[] = [];

    for (const user of users) {
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
