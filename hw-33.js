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
function writeSubjects(object) {
    let string = ''
    for (const key in object) {
        string = string + key + ', '
    }
    return string.slice(0, -2)
}
console.log(writeSubjects(subjects));

// 2. Посчитать общее количeство студентов и учителей на всех предметах
function countPeople(object) {
    let people = 0
    for (const key in object) {
        for (const i in object[key]) {
            people = people + object[key][i]
        }
    }
    return people
}
console.log(countPeople(subjects));

// 3. Получить среднее количество студентов на всех прeдметах
function countAverageStudents (object) {
    let allStudents = 0
    let count = 0
    for (const key in object) {
            allStudents = allStudents + object[key]['students']

            count =+ 1
    }
    return allStudents / count
}
console.log(countAverageStudents(subjects));

// 4. Создать массив из объектов предметов
function createSublectsArray(object) {
    let subjectsArray = []
    for (const key in object) {
        subjectsArray.push(object[key])
    }
    return subjectsArray
}
console.log(createSublectsArray(subjects));

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
function sortTeachers (object) {
    let subjectsArray = createSublectsArray(subjects)

}
sortTeachers()