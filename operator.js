// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);   // 문자열로 바뀜 
console.log(`string literals: 1 + 2 = ${1 + 2}`);  // '를 사용해도 다 string으로 인식해서 편리 
console.log('ellie\'s book');  // single quote로 문자열을 만들면 특수기호를 표현할 때 번거로움 

console.log('5' - 3);


// 실험해본 바로는
// string + number -> string
// string -, *, / number -> number

// 2. Numeric operators
console.log(1 + 1); // add 
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter += 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter += 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3; 
let y = 6;
x += y;  // x = x + y;


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value  => true값을 찾는 즉시 연산 종료 => simple한 value부터 앞에 두어 부하 줄이기 
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value  => false값을 찾는 즉시 연산 종료 => heavy한 operation은 뒤에서 체크
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement // if로 표현한 것에 비해 간결함 
// nullableObject && nullableObject.something    ->  null이라면 something을 실행하지 않음 

function check() {
    for (let i = 0; i < 10; i++)
    {
        //wasting time
        console.log('hello');
    }
    return true;
}


// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입 상관없이 내용이 같으면 같다고 판단 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion   // safer
// 타입 신경 씀
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference 
const a1 = { name: 'a1'};
const a2 = { name: 'a1'};
const a3 = a1;
// a1,a2,a3는 메모리에 object를 가리키는 포인터 주소를 가지고 있음 
// a1 -> ref1 -name-> a1
// a2 -> ref2 -name-> a1
// a3 -> ref1 -name-> a1
console.log(a1 == a2);  // 타입은 같지만 내용 (reference)이 달라서 false
console.log(a1 === a2);  // 내용이 달라서 false 
console.log(a1 === a3);  // 둘 다 ref1이라는 같은 값을 가지고 있어서 true


// equality - puzzler
console.log(0 == false);   // t
console.log(0 === false);  // f
console.log('' == false);  // t
console.log('' === false);  // f
console.log(null == undefined);  // true... 같은 것으로 간주됨 
console.log(null === undefined);  // f


// 8. Conditional operaotrs: if 
// if, else if, else
const myName = 'ellie';
if (myName === 'ellie') {
    console.log('welcome, Ellie!');
} else if (myName === 'coder') {
    console.log('You are amazing, coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(myName === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks 
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome':    // Chrome과 Firefox일 때 실행 내용이 같으면 이렇게 표현 가능 
    case 'Firefox':
        console.log('I love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i -= 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 1) continue;
    console.log(`i: ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
    if (i > 8) break;
    console.log(`i: ${i}`);
}