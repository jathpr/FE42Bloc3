Задачи:
// С ниже приведенным объектом решить следующие задачи:

// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на 
// факультете от большего к меньшему

// const subjects = {
//     mathematics: {
//         students: 200,
//         teachers: 6
//     },
//     biology: {
//         students: 120,
//         teachers: 6
//     },
//     geography: {
//         students: 60,
//         teachers: 2
//     },
//     chemistry: {
//         students: 100,
//         teachers: 3
//     }
// }

// 1. Создать строку из названий предметов написаных через запятую
{ 
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

    const subjectNames = Object.keys(subjects).join(", ");
    console.log(subjectNames);
}

// 2. Посчитать общее количнство студентов и учителей на всех предметах

{
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

    let totalStudents = 0;
    let totalTeachers = 0;

    for (let subject in subjects) {
        totalStudents += subjects[subject].students;
        totalTeachers += subjects[subject].teachers;
    }

    console.log(`Total students: ${totalStudents}`);
    console.log(`Total teachers: ${totalTeachers}`);
}

// 3. Получить среднее количество студентов на всех пердметах
{
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

    let totalStudents = 0;
    let subjectCount = 0;

    for (let subject in subjects) {
        totalStudents += subjects[subject].students;
        subjectCount++;
    }

    const averageStudents = totalStudents / subjectCount;

    console.log(`Average students: ${averageStudents}`);
}
// 4. Создать массив из объектов предметов
{
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
    const subjectsArray = [];

    for (let subject in subjects) {
        const newSubject = {
            subject: subject,
            students: subjects[subject].students,
            teachers: subjects[subject].teachers
        };
        subjectsArray.push(newSubject);
    }

    console.log(subjectsArray);
}
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
{
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

    const subjectsArray = [];

    for (let subject in subjects) {
    const newSubject = {
        subject: subject,
        students: subjects[subject].students,
        teachers: subjects[subject].teachers
    };
    subjectsArray.push(newSubject);
    }

    subjectsArray.sort((a, b) => b.teachers - a.teachers);

    console.log(subjectsArray);
}
