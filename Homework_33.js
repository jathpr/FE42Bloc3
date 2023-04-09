const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1. Создать строку из названий предметов написаных через запятую
let string = ''
for (let key in subjects) {
    string += key + ', '
}
string = string.slice(0, -2)
console.log(string)

// 2. Посчитать общее количнство студентов и учителей на всех предметах
const amountStudentsOrTeachers = (object, who) => {
    let result = 0;
  for (let key in subjects) {
    result += object[key][who];
  }
  return result
};
console.log(amountStudentsOrTeachers(subjects, 'students'), 'students')
console.log(amountStudentsOrTeachers(subjects, 'teachers'), 'teachers')

// 3. Получить среднее количество студентов на всех предметах

const averageAmount = () => {
    let amountSubjects = 0;
    let amountStudents = 0;
    for (let key in subjects){
        amountSubjects++
        amountStudents+= subjects[key].students
    }
    return amountStudents/amountSubjects
}
console.log (averageAmount(), 'averageAmount of students')

// 4. Создать массив из объектов предметов
const arrayFromSubjects = () => {
    let arraySubjects = []
    for (let key in subjects) {
        arraySubjects.push(subjects[key])
    }
    return arraySubjects
}
console.log(arrayFromSubjects())

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const sortSubjects  = () => {
    let arrSubjects = arrayFromSubjects();
    arrSubjects.sort((a, b)=> b.teachers - a.teachers)
    return arrSubjects
}
console.log(sortSubjects())

