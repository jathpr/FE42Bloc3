type User = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
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
const getNameString = (array: User[]) => {
    const arrayOfUsers = array.map(value => value.name);
    const stringOfUsers = arrayOfUsers.join(', ')
    return stringOfUsers;
}
console.log("🚀 ~ file: hw-35.ts:41 ~ getNameString:", getNameString(users))


// 2. Посчитать общее количeство машин у пользователей
const countCars = (array: User[]) => {
    let amountCars = 0;
    array.map(el => {
        if (el.cars) {
            amountCars += el.cars.length
        }
    }
    );
    return amountCars
}
console.log(countCars(users));

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const sortUsers = (array: User[]) => {
    const arrayUsers = []
    array.filter((el) => {
        if (el.hasEducation === true) { arrayUsers.push(el.name) }
    })
    return arrayUsers
}
console.log(sortUsers(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const sortUsersByAnimal = (array: User[]) => {
    const arrayUsers = []
    array.filter((el) => {
        if (el.animals) { arrayUsers.push(el.name) }
    })
    return arrayUsers
}
console.log(sortUsersByAnimal(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
const getStringOfCars = (array: User[]) => {
    const carsArray = []
    array.map(elem => {
        if (elem.cars) carsArray.push(elem.cars)
    })
    const stringOfCars = carsArray.join(', ')
    return stringOfCars;
}
console.log(getStringOfCars(users));