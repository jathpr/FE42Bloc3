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
const sortUsersByEducation = (users: User[]): User[] => {
   const usersCopy = [...users];
   usersCopy.sort((user1, user2) => +user2.hasEducation - +user1.hasEducation)

   return usersCopy;
}

console.log(sortUsersByEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const sortUsersByAnimalsExisting = (users: User[]): User[] => {
   const usersCopy = [...users];
   usersCopy.sort((user1, user2) => {
      if (user1.animals && !user2.animals)
         return -1;


      if (!user1.animals && user2.animals)
         return 1;

      return 0
   })

   return usersCopy;
}

console.log(sortUsersByAnimalsExisting(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
const getCarsBrand = (users: User[]): string => {
   const usersWithCarsArray = users.filter(user => Boolean(user.cars) === true);
   const usersCarsArray = usersWithCarsArray.map(user => user.cars);

   let allCarsArray: string[] = [];
   for (let i = 0; i < usersCarsArray.length; i++) {
      allCarsArray.push(usersCarsArray[i].join(', '));
   }

   return allCarsArray.join(', ');
}

console.log(getCarsBrand(users));

