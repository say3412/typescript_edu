function getNumber(value: number): number {
  return value;
}

function getString(value: string): string {
  return value;
}

function getBoolean(bool: boolean) {
  return bool;
}

function getArray(arr: string[]) {
  return arr;
}

function getArray1(arr: Array<string>) {
  return arr;
}

function getObject(obj: { name: string }) {
  return obj;
}

function getSimple<T>(value: T): T {
  // 일반타입 (모든 타입이 들어올 수 있음)
  return value;
}

const result = getNumber(1);
console.log(result);

const result1 = getSimple<number>(5);
const result2 = getSimple<string>("Hi");
const result3 = getSimple(true);
const result4 = getSimple<string[]>(["hi"]);
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

interface Box<T, U> {
  value: T;
  width: U;
}

const box1: Box<number, number> = { value: 10, width: 48 };
const box2: Box<string, number> = { value: "toronto", width: 20 };
const box3: Box<string, string> = { value: "toronto", width: "46cm" };

console.log(box1);
console.log(box2);
console.log(box3);

interface ApiRespose<T> {
  data: T;
  status: number;
}

const res: ApiRespose<string> = {
  data: "success",
  status: 200,
};

interface List<T> {
  items: T[];
}

// Type 제한
//length  속성이 있는 타입만 허용
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("hello");
printLength(["a", "b", "c"]);
printLength({ length: 3, name: "apple" });
// printLength(123); //type 'number' is not assignable

// 특정 타입만 허용
function logValue<T extends string | number>(value: T) {
  console.log(value);
}

logValue("hi");
logValue(10);
// logValue(true); // type 'boolean' is not assignable

interface Person {
  name: string;
  age?: number;
}

function printName<T extends Person>(obj: T) {
  console.log(obj.name);
}

printName({ name: "Banana", age: 10 });
printName({ name: "Banana" });
// printName({ age: 30 });

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const user = {name: 'Hanna', age: 20};

console.log(getProperty(user, 'name'));
console.log(getProperty(user, 'age'));
// console.log(getProperty(user, 'job'));

// emun 은 개별적으로

