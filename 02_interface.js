const person = { name: "Son", age: 30 };
const person1 = { name: "Son", age: 30 };
const movie1 = { title: "왕과 사는 남자", rank: 10 };
console.log("--- // 옵션 속성 optional ---");
function studentInfo(s) {
    console.log(s.name);
    console.log(s.grade);
    console.log(s.major);
}
studentInfo({ name: "Son", grade: 1, major: "computer" });
const s1 = { name: "Son", grade: 1, major: "computer" };
studentInfo(s1);
const s2 = { name: "Grace", grade: 3 };
studentInfo(s2);
console.log("--- // inferface 상속 ---");
const s3 = { name: "Happy", age: 20, major: "advertising" };
function description(p) {
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
function info(p) {
    const result = `${p.name}, ${p.age}, ${p.major}, ${p.skill}`;
    console.log(p.name);
}
info({ name: "손흥민", age: 30, major: "컴공", skill: "축구" });
console.log("--- // quiz ---");
console.log("--- // quiz 2 ---");
let DB = [];
function saveDB(user) {
    const oldLen = DB.length;
    DB.push(user);
    if (oldLen === DB.length) {
        return Promise.reject("DB 입력 실패");
    }
    console.log(`${user.name}님 DB 저장 성공`);
    return Promise.resolve(user);
}
function sendEmail(user) {
    console.log(`${user.name}님의 ${user.email}로 회원가입 메일 발송`);
    return Promise.resolve(user);
}
function getResult(user) {
    return Promise.resolve(`${user.name} 회원가입 성공`);
}
function register(user) {
    return saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch((e) => { throw e; });
}
register({ name: "Happy", email: "happy@email.com" }).then(console.log);
export {};
