import { Student } from "./Student.js";

export class BudgetStudent extends Student {
  constructor(university, course, fullName, scholarship) {
    super(university, course, fullName);
    this._scholarship = scholarship;
    this.getScholarship();
  }

  getScholarship() {
      if (this._student && this.getAverageMark() >= 4) {
        return `You've got ${this._scholarship} of your scholarsip!`;
      }
  }
}
