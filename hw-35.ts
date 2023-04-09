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

// Task 1:
const getUsernameString = (arr) => {
    const nameArr: string[] = []
    arr.forEach(element => {
        nameArr.push(element.name)
    });
    return console.log(nameArr.join(', '))
}
getUsernameString(users)

// Task 2:
const getSumUsersCar = (arr) => {
    let sumCars: number = 0
    const carsArr: string[] = []
    arr.forEach(element => {
        if(element.cars !== undefined) {
            element.cars.forEach(element => {
                carsArr.push(element)
            });
        }
    });
    sumCars = carsArr.length
    return console.log(`users have a total of ${sumCars} cars`)
}
getSumUsersCar(users)

// Task 3:
const getEducationUsers = (arr) => {
    const educationUsers: string[] = []
    arr.forEach(element => {
        if(element.hasEducation === true) {
            educationUsers.push(element.name)
        }
    });
    return console.log(`users: ${educationUsers.join(', ')} has education`)
}
getEducationUsers(users)

// Task 4:
const getAnimalsUsers = (arr) => {
    const animalsUser: string[] = []
    arr.forEach(element => {
        if(element.animals !== undefined) {
            animalsUser.push(element.name)
        }
    });
    return console.log(`users: ${animalsUser.join(', ')} has animals`)
}
getAnimalsUsers(users)

// Task 5:
const getStringUsersCars = (arr) => {
    const usersCar: string[] = []
    let stringCars: string = ''
    arr.forEach(function (element) {
        if (element.cars !== undefined) {
            usersCar.push(element.cars.join(', '))
        }
    });
    stringCars = usersCar.join(', ')
    return console.log(stringCars);
}
getStringUsersCars(users)
