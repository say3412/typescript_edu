// private
// getter setter
class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    get Grade() {
        return this.grade;
    }
    set Grade(value) {
        if (value < 1 || value > 4) {
            throw new Error('학년은 1~4 사이여야 합니다.');
        }
        this.grade = value;
    }
}
const student = new Student('손흥민', 3);
const grade = student.Grade; // 속성으로 접근, 함수 아님
console.log(grade);
student.Grade = 4;
console.log(student.Grade);
// 함수
class StudentA {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
    setGrade(value) {
        if (value < 1 || value > 4) {
            throw new Error('학년은 1~4 사이여야 합니다.');
        }
        this.grade = value;
    }
}
const studentA = new StudentA('손흥민', 3);
// const gradeA = studentA.Grade;
const gradeA = studentA.getGrade(); // 함수로 만든 경우에는 함수 호출
console.log(gradeA);
studentA.setGrade(4);
console.log(studentA.getGrade());
// protected
class StudentB {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
class HighSchoolStudent extends StudentB {
    constructor(name, grade) {
        super(name, grade);
    }
    printGrade() {
        console.log(`학년 : ${this.grade}`);
    }
    printGrade2() {
        console.log(`학년 : ${this.getGrade()}`);
    }
}
const s = new HighSchoolStudent('Kim', 1);
// s.grade = 2; // 'grade' is protected
s.printGrade();
s.printGrade2();
export {};
