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

//1) Создать строку из названий предметов написаных через запятую
const createAllSubjStr = function (obj) {
	let allSubjWithSpace = ''
	for (const subj in obj) {
		allSubjWithSpace += subj + ' '
	}
	let allSubjArray = allSubjWithSpace.split(' ')
	allSubjArray.pop()
	let allSubjStr = allSubjArray.join(', ')
	return allSubjStr
}
console.log('#1: All subjects: ', createAllSubjStr(subjects))

//2) Посчитать общее количество студентов и учителей на всех предметах
const calcPeople = function (obj, role) {
	let studentsCount = 0
	for (const subj in obj) {
		studentsCount += obj[subj][role]
	}
	return studentsCount
}
console.log('#2: Students: ', calcPeople(subjects, 'students'))
console.log('#2: Teachers: ', calcPeople(subjects, 'teachers'))

//3. Получить среднее количество студентов на всех пердметах
const calcAverageNumStudents = function (obj) {
	let studentsNumsArray = []
	for (const subj in obj) {
		studentsNumsArray.push(obj[subj].students)
	}
	const sumStudent = studentsNumsArray.reduce((acc, studentNum) => acc += studentNum, 0)
	return sumStudent / studentsNumsArray.length
}
console.log('#3: Average number of students: ', calcAverageNumStudents(subjects))

//4. Создать массив из объектов предметов
const createSubjectsArray = function (obj) {
	let allSubjArray = []
	for (const subj in obj) {
		obj[subj].subject = subj
		allSubjArray.push(obj[subj])
	}
	return allSubjArray
}
console.log('#4: Array of Subjects: ', createSubjectsArray(subjects))

//5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sortSubjArrByTeacherNum = function (obj) {
	let allSubjArray = createSubjectsArray(obj)
	allSubjArray.sort((subj1, subj2) => subj2.teachers - subj1.teachers)
	return allSubjArray
}
console.log('Array os Subjects sorted by Teachers Num: ', sortSubjArrByTeacherNum(subjects))