import type { StringLiteral } from "typescript";

const person = { name: "Son", age: 30 };

interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "Son", age: 30 };
// const person2: Person = { name: "Son" }; //Property 'age' is missing
// const person2: Person = { name: "Son", age: 30, team: "LA" }; // 'team' does not exist in type 'Person'

interface Movie {
  title: string;
  rank: number;
}

const movie1: Movie = { title: "왕과 사는 남자", rank: 10 };

console.log("--- // 옵션 속성 optional ---");
interface Student {
  name: string;
  grade: number;
  major?: string;
}

function studentInfo(s: Student) {
  console.log(s.name);
  console.log(s.grade);
  console.log(s.major);
}

studentInfo({ name: "Son", grade: 1, major: "computer" });
const s1: Student = { name: "Son", grade: 1, major: "computer" };
studentInfo(s1);
const s2: Student = { name: "Grace", grade: 3 };
studentInfo(s2);

console.log("--- // inferface 상속 ---");
interface Person {
  name: string;
  age: number;
}

interface Student1 extends Person {
  major: string;
}

const s3: Student1 = { name: "Happy", age: 20, major: "advertising" };
// const s4: Student1 = { name: "Happy", age: 20 }; // 'major' is missing

interface PersonA {
  name: string;
  age: number;
}

interface StudentA extends PersonA {
  major: string;
}

interface PlayerA extends PersonA {
  skill: string;
}

function description(p: StudentA | PlayerA) {
  if ("major" in p) {
    const info = `${p.name}, ${p.age}, ${p.major}`;
    console.log(info);
  }

  if ("skill" in p) {
    const info = `${p.name}, ${p.age}, ${p.skill}`;
    console.log(info);
  }
}

description({ name: "Gaga", age: 40, major: "Business" });
description({ name: "Gaga", age: 40, skill: "Business Communication" });

// interface-intersection : 타입 2개를 합쳐서 사용 '&'
function info(p: StudentA & PlayerA) {
  const result = `${p.name}, ${p.age}, ${p.major}, ${p.skill}`;
  console.log(p.name);
}

info({ name: "손흥민", age: 30, major: "컴공", skill: "축구" });

interface PersonB {
  name: string;
}

interface PersonB {
  age: number;
}

// 객체 모델링
interface Maker {
  name: string;
  country: string;
}

interface Car {
  model: string;
  maker: Maker;
}

console.log("--- // quiz ---");

// MovieInfos , Movie
interface MovieInfos {
  articleList: Movies[];
  lastPublishTime: number;
  moreList: boolean;
}

interface Movies {
  title: string;
  url: string;
  image: string;
  authorName: string;
  authorUrl: string;
  authorImage: string;
  createTime: string;
}

console.log("--- // quiz 2 ---");

let DB: User[] = [];

interface User {
  name: string;
  email: string;
}

function saveDB(user: User): Promise<User> {
  const oldLen = DB.length;
  DB.push(user);

  if (oldLen === DB.length) {
    return Promise.reject("DB 입력 실패");
  }

  console.log(`${user.name}님 DB 저장 성공`);
  return Promise.resolve(user);
}

function sendEmail(user: User): Promise<User> {
  console.log(`${user.name}님의 ${user.email}로 회원가입 메일 발송`);
  return Promise.resolve(user);
}

function getResult(user: User): Promise<string> {
  return Promise.resolve(`${user.name} 회원가입 성공`);
}

function register(user: User): Promise<string> {
  return saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((e: Error) => {throw e});
}

register({ name: "Happy", email: "happy@email.com" }).then(console.log);

