const result = document.querySelector(".hw-six");
const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// Function #1 that gets the student's subjects
function getSubjects(studentsArray) {
  const result = Object.keys(studentsArray.subjects);
  return result.map(
    (subjectKey) =>
      subjectKey[0].toUpperCase() +
      subjectKey.slice(1).toLowerCase().replaceAll("_", " ")
  );
}

// Function #2 that gets student's average mark
function getAverageMark(studentsArray) {
  const splitedMarks = Object.values(studentsArray.subjects).flat();
  const initialValue = 0;

  const result = splitedMarks.reduce(
    (previousSubjectValue, currentSubjectValue) =>
      previousSubjectValue + currentSubjectValue,
    initialValue
  );

  return Number((result / splitedMarks.length).toFixed(2));
}

// Function #3 that gets information about specific student
const getStudentInfo = (studentsArray) => {
  return {
    name: studentsArray.name,
    course: studentsArray.course,
    averageMark: getAverageMark(studentsArray),
  };
};

// Function #4 that gets Student Names
const getStudentsNames = (students) => {
  return students.map((student) => student["name"]).sort();
};

// Function #5 that gets best student
const getBestStudent = (student) => {
  const maxMark = Math.max(
    ...students.map((student) => getAverageMark(student))
  );

  for (let index = 0; index < student.length; index++) {
    if (getStudentInfo(student[index])["averageMark"] === maxMark) {
      return student[index]["name"];
    }
  }
};

// Function #6 that calculates word letters and makes an oject of them
function calculateWordLetters(string) {
  const wordObj = {};

  [...string].forEach((element) => {
    if (!wordObj[element]) {
      wordObj[element] = 0;
    }

    wordObj[element]++;
  });

  return wordObj;
}

students.forEach((student) => {
  result.insertAdjacentHTML(
    "beforeend",
    `<p>Subjects of student ${student.name} : ${getSubjects(student)}</p>`
  );
});
students.forEach((student) => {
  result.insertAdjacentHTML(
    "beforeend",
    `<p>Average mark of student ${student.name} : ${getAverageMark(
      student
    )}</p>`
  );
});
students.forEach((student) => {
  result.insertAdjacentHTML(
    "beforeend",
    `<p>Info about ${student.name} ${getStudentInfo(student)}</p>`
  );
});
result.insertAdjacentHTML(
  "beforeend",
  `<p>Names of students in alphabetical order: 
  ${getStudentsNames(students)}</p>`
);
result.insertAdjacentHTML(
  "beforeend",
  `<p>The best student is: 
  ${getBestStudent(students)}</p>`
);
result.insertAdjacentHTML(
  "beforeend",
  `<p>Calculated Word Letters Object: 
    ${calculateWordLetters("test")}</p>`
);
