'use strict'

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

function getSubjects(object) {
    let subjectsArray = Object.keys(object);
    let subjects = 'Subjects: ' + subjectsArray.join(', ');
    console.log(subjects)
}

getSubjects(subjects)

// 2. Посчитать общее количнство студентов и учителей на всех предметах

function getPeopleSum(object) {
    let students = 0;
    let teachers = 0;
    for (const people in object){
        students += object[people].students;
        teachers += object[people].teachers;
    }
    console.log(`Students: ${students}`);
    console.log(`Teachers: ${teachers}`)
}

getPeopleSum(subjects)

// 3. Получить среднее количество студентов на всех пердметах

function getAverageSum (object){
    let studentsSum = 0;
    for( const students in object){
        studentsSum += object[students].students;
    }
    const averageSum = studentsSum / Object.keys(object).length;
    return console.log(`Average sum of students: ${averageSum}`)
}

getAverageSum(subjects)

// 4. Создать массив из объектов предметов

function getArrayFromObjects(object){
    let subjectsArray = []
	for (const subjects in object) {
		object[subjects].subject = subjects
		subjectsArray.push(object[subjects])
	}
	return subjectsArray
}

console.log(`Subjects array:`,getArrayFromObjects(subjects))

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

function sortTeachersAmoun (object){
    let subjectsArray = getArrayFromObjects(object);
    subjectsArray.sort((teachers1, teachers2) => teachers1.teachers > teachers2.teachers ? -1: 1)
    console.log(subjectsArray)
}

sortTeachersAmoun(subjects)