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


/* TASK 1 */
// Создать строку из названий предметов написаных через запятую

// /* способ 1 */
let array = []
for (const key in subjects) {
    array.push(key)
}
array = array.join(', ')
// console.log(array)

/* способ 2 */
let str = ""
for (const key in subjects) {
    str += `${key}, `
}
str = str.slice(0, -2)
// console.log(str)


/* TASK 2 */
// Посчитать общее количество студентов и учителей на всех предметах

let sum = 0
for (const key in subjects) {
    sum += subjects[key].students + subjects[key].teachers
}
// console.log(sum)


/* TASK 3 */
// Получить среднее количество студентов на всех предметах

let avg = 0
for (const key in subjects) {
    avg += subjects[key].students / Object.keys(subjects).length
}
// console.log(avg)


/* TASK 4 */
// Создать массив из объектов предметов

let arr = []
arr.push(subjects)
// console.log(arr)


/* TASK 5 */
// Получить массив из предметов и отсортировать
//  по количеству преподавателей 
// на факультете от большего к меньшему 
let arr2 = []
for (const key in subjects) {
    arr2.push(key)
    for ( i = 0; i < subjects.length; i++) {
        if (subjects[key].teachers < arr) {
            
        }
    }
}
console.log(arr2)
// if (subjects.teachers > arr2) {
//     arr2.unshift(subjects)
// } else {
//     arr2.push(key)
// }
