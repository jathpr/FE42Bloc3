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
const getStrOfSubjsName = (subjects) => {
   // let subjsArr = [];

   // for (const key in subjects) {
   //    subjsArr.push(key);
   // }
   
   const subjsArr = Object.keys(subjects);

   return subjsArr.join(', ');
}

console.log(getStrOfSubjsName(subjects));

//     2. Посчитать общее количнство студентов и учителей на всех предметах
const getTotalTeachersAndStudents = (subjects) => {
   let totalTeachers = 0, totalStudents = 0;

   for (const key in subjects) {
      totalStudents += subjects[key].students;
      totalTeachers += subjects[key].teachers;
   }

   console.log('total number of students =', totalStudents);
   console.log('total number of teachers =', totalTeachers);

   return {
      totalStudents: totalStudents,
      totalTeachers: totalTeachers
   }
}

// getTotalTeachersAndStudents(subjects);

//     3. Получить среднее количество студентов на всех пердметах
const getAvgNumOfStudents = (subjects) => {

   const totalStudents = getTotalTeachersAndStudents(subjects).totalStudents;
   const subjsArr = Object.keys(subjects);

   return totalStudents / subjsArr.length;   
}

console.log('Avgerage number of students:', getAvgNumOfStudents(subjects));

//     4. Создать массив из объектов предметов
const getArrayFromObj = (obj) => {
   const arrOfObjectValues = Object.entries(obj);
   const arrFromObj = arrOfObjectValues.map(value => {

      return {
         [value[0]]: value[1]
      }
   });

   return arrFromObj;
}

// console.log(getArrayFromObj(subjects));

//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sortArrayOfSubjectsByTeachers = (subjects) => {

   const arrOfSubjects = getArrayFromObj(subjects);
   const subjsKeys = Object.keys(subjects);

   arrOfSubjects.sort((subj1, subj2) => {

      let key1, key2;
      for (let i = 0; i < subjsKeys.length; i++) {
         if (subj1[subjsKeys[i]]) {
            key1 = subjsKeys[i]
         }
         
         if (subj2[subjsKeys[i]]) {
            key2 = subjsKeys[i]
         }
      }

      if (subj1[key1].teachers > subj2[key2].teachers) {
         return -1
      }

      if (subj1[key1].teachers < subj2[key2].teachers) {
         return 1
      }

      if (subj1[key1].teachers === subj2[key2].teachers) {
         return 0
      }      
   })

   return arrOfSubjects;
}

console.log(sortArrayOfSubjectsByTeachers(subjects));