
type Users = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: Users[] = [
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
    const getUsernameString = (array: Users[]) => {
        const newArr=array.map((val)=>val.name)
        const usernameStr=newArr.join(', ')
        return usernameStr
    }
    console.log(getUsernameString(users))
    
    // 2. Посчитать общее количнство машин у пользователей
    const getAmountCars = (array: Users[]) => {
        const arrCars = []
        array.forEach(element => {
            if (element.cars) {
                arrCars.push(element.cars)
            }
        })
        const resultArr = []
        return resultArr.concat(...arrCars).length
    }
        console.log(getAmountCars(users), 'cars')
        
        // 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    const getUsersWithEducation = (array: Users[]) => {
        const nextUsers = []
        array.filter(item => {if (item.hasEducation === true){
        nextUsers.push(item.name)}
        })
        return nextUsers
    }    
    console.log(getUsersWithEducation(users), 'with education')

        // 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
        const getUsersWithAnimals = (array: Users[]) => {
            const usersWithAnimals = []
            array.filter(item => {if (item.animals){
                usersWithAnimals.push(item.name)}
            })
            return usersWithAnimals
        }    
        console.log(getUsersWithAnimals(users), 'with animals')

        // 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
        const getCars = (array: Users[]) => {
            const arrCars = []
            array.map(element => {
                if (element.cars) {
                    arrCars.push(element.cars)
                }
            })
            return arrCars.toString()
        }
            console.log(getCars(users))