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
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
   },
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
   }
]

// 1. Создать строку из имен пользователей через запятую
const getNamesString = (users: User[]): string => {
   const userNamesArray = users.map(user => user.name);
   return userNamesArray.join(', ');
}

console.log(getNamesString(users));

// 2. Посчитать общее количество машин у пользователей
const getCarsTotalNumber = (users: User[]): number => users.reduce((carsTotalNumber, user) => {
   if (user.cars) {
      return carsTotalNumber + user.cars.length
   }

   return carsTotalNumber
}, 0);
console.log(getCarsTotalNumber(users));

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const filterUsersByEducation = (users: User[]): User[] => {
   const filteredUsers = users.filter(user => user.hasEducation)

   return filteredUsers;
}

console.log(filterUsersByEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const sortUsersByAnimalsExisting = (users: User[]): User[] => {
   const filteredUsers = users.filter(user => user.animals)

   return filteredUsers;
}

console.log(sortUsersByAnimalsExisting(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
const getCarsBrand = (users: User[]): string => {
   const carsSet = users.reduce((carsSet, user) => {
      (user.cars)?.forEach(car => {
         if (!carsSet.has(car)) {
            carsSet.add(car)
         }
      });

      return carsSet;
   }, new Set());

   const carsArr = Array.from(carsSet);

   return carsArr.join(', ');
}

console.log(getCarsBrand(users));

