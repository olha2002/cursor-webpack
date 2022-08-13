const students = ["Oleksandr", "Igor", "Olena", "Ira", "Oleksii", "Svitlana"];
const themes = [
  "Differential equation",
  "Theory of automata",
  "Algorithms and data structures",
];
const marks = [4, 5, 5, 3, 4, 5];

const studentsClone = [...students];

const boysArray = studentsClone.filter((student) => !student.endsWith("a"));
const girlsArray = studentsClone.filter((student) => student.endsWith("a"));

// func that combines students
export function combineBoth(boysArray, girlsArray) {
  return boysArray.map((boy, i) => [boy, girlsArray[i]]);
}
const combinedBoysGirls = combineBoth(boysArray, girlsArray);

//func that get tasks to the array with pairs of students
function getTasks(combinedStudents, themes) {
  const newPair = combinedStudents.map((el) => el.join(" and "));
  return newPair.map((combinedStudents, i) => [combinedStudents, themes[i]]);
}
const pairsWithTasks = getTasks(combinedBoysGirls, themes);

//func that gets student with his mark
function studentsMarks(students, marks) {
  return students.map((student, i) => [student, marks[i]]);
}
const studentsWithMarks = studentsMarks(studentsClone, marks);

//func that calcs students with their marks for the project
function studentsEvaluatedProjects(pairsWithTasksArr) {
  return pairsWithTasksArr.map((pairsAndTheirTasks) => [
    ...pairsAndTheirTasks,
    Math.ceil(Math.random() * 5),
  ]);
}
const studentsEvaluatedProjectsArr = studentsEvaluatedProjects(pairsWithTasks);

const result = `
<p>Boys list: ${boysArray}</p
<p>Girls list: ${girlsArray}</p
<p>Both boys and girls: ${combinedBoysGirls}</p
<p>Pairs and their tasks: ${pairsWithTasks}</p
<p>Student and his mark: ${studentsWithMarks}</p
<p>Pairs of students that has their evaluated projects: ${studentsEvaluatedProjectsArr}</p
`;
const container = document.querySelector(".hw-four");
container.innerHTML = result;
