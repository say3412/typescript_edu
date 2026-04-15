type PersonName = string;

let name:string = '신호탄';
let name1:string = '국기봉';
let name2:PersonName = '바나나';

function printAge(num: string | number) {
    console.log(num);
}

type Age = string | number;
function printAge1(age: Age) {
    console.log(age);
}

printAge(4);
printAge1('4');
