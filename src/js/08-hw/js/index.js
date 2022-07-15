import { Student } from "./Student.js";
import { BudgetStudent } from "./BudgetStudent.js";

const container = document.querySelector(".hw-eight");
const student = new Student("Lviv Polytechnic", "third", "Olha Orach");
const studentTwo = new BudgetStudent(
  "Lviv Polytechnic",
  "third",
  "Yulia Kozak",
  1400
);

const result = `
<p>Student info: ${student.getInfo()}</p>
<p>Student Marks: ${student.marks}</p>
<p>Budget Student info: ${studentTwo.getInfo()}</p>
<p>Budget Average Marks: ${studentTwo.getAverageMark()}</p>
<p>Budget Student Scholarship: ${studentTwo.getScholarship()}</p>
`;

container.innerHTML = result;
