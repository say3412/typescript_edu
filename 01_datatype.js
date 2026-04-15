import { isBinaryOperatorToken } from "typescript";
let num = 10;
const greet = "Hello TypeScript";
const isOn = true;
const person = { name: "Son", age: 10 };
const numbers = [1, 2, 3, 4, 5, 6];
const bts = ["진", "슈가", "제이홉"];
const item = ["Son", 30, true];
let name = "Son";
name = 1;
// num = 'hello';
let empty = null;
let notAssiged = undefined;
// bts.push(10);
function add(num1, num2) {
    return num1 + num2;
}
const result = add(5, 4);
// const result1 = add('1', '2'); // Argument of type 'string' is not assignable to parameter of type 'number'.
// const result2: string = add(4, 5); // Type 'number' is not assignable to type 'string'.
// const result3: number = add(4); //Expected 2 arguments, but got 1.
console.log("//함수의 매개변수와 반환 값");
function sayHello(name) {
    return `Hello, ${name}`;
}
let greeting = sayHello("RM");
console.log(greeting);
function sayHi(name) {
    console.log(`Hi ${name}`);
}
const hi = sayHi("Son");
console.log(hi);
console.log("--- //함수형 매개변수 ---");
function sayHello1(name) {
    return `Hello ${name}`;
}
function sayHello2(name) {
    return `Hello ${name}`;
}
function greeting1(name, callback) {
    return callback(name);
}
const result4 = greeting1("Son", sayHello1);
console.log(result4);
const result5 = greeting1("Hun", (name) => `Hello ${name}`);
console.log(result5);
// const result6 = greeting1("Son", sayHello2); // Argument of type '(name: number) => string' is not assignable to parameter of type '(name: string) => string'.
// const result6 = greeting1("Yum", (name: string) => 10); // type '(name: string) => number' is not assignable
console.log("--- // 형추론 ---");
let name1 = "Son";
let age = 30;
let isOn1 = true;
const person1 = { name: "Son", age: 30 };
const bts1 = ["진", "슈가", "제이홉"];
console.log(typeof name1);
console.log(typeof age);
console.log(typeof isOn1);
console.log(typeof person1);
console.log(typeof bts1);
// name1 = 10; // Type 'number' is not assignable to type 'string'.
// age = '1'; // Type 'string' is not assignable to type 'number'.
// person1 = {name: 'RM'}; // Cannot assign to 'person1' because it is a constant.
console.log("--- // 함수 형추론 ---");
function sayHello3(name) {
    return `Hello ${name}`;
}
let greeting3 = sayHello3("RM");
function sayHello4(name) {
    // string
    return `Hello ${name}`;
}
function sayHello5(name) {
    // void
    console.log(`Hello ${name}`);
    return;
}
function sayHello6(name) {
    // void
    console.log(`Hello ${name}`);
}
console.log("--- // union type ---");
let num2 = 10;
console.log(typeof num2);
num2 = "hello";
console.log(typeof num2);
num2 = 45;
console.log(typeof num2);
function getAge(age) {
    return "my age is " + age;
}
console.log(getAge(20));
console.log(getAge("20"));
function getAge1(age) {
    return age;
}
const age1 = getAge1(10);
console.log(age1);
console.log(typeof age1);
const age2 = getAge1("10");
console.log(age2);
console.log(typeof age2);
console.log("--- quiz 1: 구구단 ---");
function multiple(dan) {
    console.log(`*** ${dan} 단 ***`);
    for (let i = 1; i < 10; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
}
multiple(7);
console.log("--- quiz 1: 학점 ---");
function getGrade(score) {
    let grade = "F";
    if (score >= 90) {
        grade = "A";
    }
    else if (score >= 80) {
        grade = "B";
    }
    else if (score >= 70) {
        grade = "C";
    }
    else if (score >= 60) {
        grade = "D";
    }
    return grade;
}
console.log(getGrade(100));
console.log(getGrade(99));
console.log(getGrade(84));
console.log(getGrade(79));
console.log(getGrade(40));
