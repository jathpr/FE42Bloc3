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

// task 1
function getString(obj) {
    let string = ''
    for (const key in obj) {
        if (string === '') {
            string += key  
        } else {
            string += ', ' + key 
        }
    }
    return console.log('Task 1: ' + string)
}
getString(subjects)

// task 2
function getNumPeople(obj) {
    let allStudents = 0
    let allTeachers = 0
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            allStudents += obj[key].students
            allTeachers += obj[key].teachers
        }
    }
    return console.log('Task 2: ' + (allStudents + allTeachers)*1)
}
getNumPeople(subjects)

// task 3
function getAverageStudents(obj) {
    let allStudents = 0
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            allStudents += obj[key].students;
        }
    }
    return console.log('Task 3: ' + allStudents / Object.keys(obj).length)
}

getAverageStudents(subjects)

// task 4
function getArrayItems(obj) {
    const itemArr = []
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            itemArr.push(obj[key])
        }
    }
    return console.log(itemArr)
    // if I return 72 string, then function returns string `Task4: [Object, Object]...`
    // return console.log(`Task 4: ${itemArr}`)
}

getArrayItems(subjects)

// task 5
function getAverageArray(obj) {
    const itemArr = []
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            itemArr.push(obj[key])
            itemArr.sort((a, b) => b.teachers - a.teachers)
        }
    }
    return console.log(itemArr)
}

getAverageArray(subjects)
