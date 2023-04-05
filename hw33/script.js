const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

//1
const subjectNames = Object.keys(subjects);
console.log(subjectNames);

//2
let totalStudents = 0;
let totalTeachers = 0;

for (let subject in subjects) {
  totalStudents += subjects[subject].students;
  totalTeachers += subjects[subject].teachers;
}
console.log(totalStudents);
console.log(totalTeachers);

//3
const subjectCount = Object.keys(subjects).length;
const allStudents = totalStudents / subjectCount;

console.log(allStudents);

//4
const subjectArray = [];
for (let subject in subjects) {
  const subjectObject = {
    name: subject,
    students: subjects[subject].students,
    teachers: subjects[subject].teachers,
  };
  subjectArray.push(subjectObject);
}

console.log(subjectArray);

//5
const sortedSubjects = Object.entries(subjects)
  .sort(([, subject1], [, subject2]) => subject2.teachers - subject1.teachers)
  .map(([name]) => name);
console.log(sortedSubjects);
