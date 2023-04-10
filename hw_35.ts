
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

//Task 1: Создать строку из имен пользователей через запятую
const getNamesString = (array: User[]) => {
	const names = array.map(user => user.name)
	const namesStr = names.join(', ')
	return namesStr
}
console.log('#1: Строка из имен пользователей: ', getNamesString(users))

//Task 2: Посчитать общее количнство машин у пользователей
const calcCars = (array: User[]) => {
	const carsCount = array.reduce((count, user) => {
		count += user.cars ? user.cars.length : 0
		return count
	}, 0)
	return carsCount
}
console.log('#2 Общее количество машин: ', calcCars(users))

/*Task 3: Создать функцию, которая бы принимала массив пользователей 
и отфильтровывала пользователей на наличие образования*/
const findUsersByEducation = (array: User[]) => {
	const usersWithEducation = array.filter((user) => user.hasEducation)
	const usersWithoutEducation = array.filter((user) => !user.hasEducation)
	console.log('#3.1 Пользователи с образованием: ', usersWithEducation)
	console.log('#3.2 Пользователи без образования: ', usersWithoutEducation)
}
findUsersByEducation(users)

/*Task 4: Создать функцию, которая бы принимала массив пользователей
и отфильтровывала пользователей на наличие животных */
const findUsersByAnimals = (array: User[]) => {
	const usersWithAnimal = array.filter((user) => user.hasOwnProperty('animals'))
	const usersWithoutAnimal = array.filter((user) => !user.hasOwnProperty('animals'))
	console.log('#4.1 Пользователи с животным: ', usersWithAnimal)
	console.log('#4.2 Пользователи без животного: ', usersWithoutAnimal)
}
findUsersByAnimals(users)

/*Task 5: Создать функцию, которая бы принимала массив пользователей
и отдавала бы  строку с названиями марок автомобилей через запятую*/
const getCarsString = (array: User[]) => {
	const allDrivers = array.filter((user) => 'cars' in user)
	const allCarsArr = allDrivers.map((user) => user.cars?.join(', '))
	const allCarsStr = allCarsArr.join(', ')
	return allCarsStr
}
console.log('#5 Марки автомобилей через запятую: ', getCarsString(users))