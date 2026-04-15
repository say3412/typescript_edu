function getNumber(value) {
    return value;
}
function getString(value) {
    return value;
}
function getBoolean(bool) {
    return bool;
}
function getArray(arr) {
    return arr;
}
function getArray1(arr) {
    return arr;
}
function getObject(obj) {
    return obj;
}
function getSimple(value) {
    // 일반타입 (모든 타입이 들어올 수 있음)
    return value;
}
const result = getNumber(1);
console.log(result);
const result1 = getSimple(5);
const result2 = getSimple("Hi");
const result3 = getSimple(true);
const result4 = getSimple(["hi"]);
const result5 = getSimple(["hi", true]);
const result6 = getSimple({ name: "nana", age: 50 });
const result7 = getObject({ name: "nana" });
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
const box1 = { value: 10, width: 48 };
const box2 = { value: "toronto", width: 20 };
const box3 = { value: "toronto", width: "46cm" };
console.log(box1);
console.log(box2);
console.log(box3);
const res = {
    data: "success",
    status: 200,
};
// Type 제한
//length  속성이 있는 타입만 허용
function printLength(value) {
    console.log(value.length);
}
printLength("hello");
printLength(["a", "b", "c"]);
printLength({ length: 3, name: "apple" });
// printLength(123); //type 'number' is not assignable
// 특정 타입만 허용
function logValue(value) {
    console.log(value);
}
logValue("hi");
logValue(10);
function printName(obj) {
    console.log(obj.name);
}
printName({ name: "Banana", age: 10 });
printName({ name: "Banana" });
// printName({ age: 30 });
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: 'Hanna', age: 20 };
console.log(getProperty(user, 'name'));
console.log(getProperty(user, 'age'));
export {};
// console.log(getProperty(user, 'job'));
// emun 은 개별적으로
