// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value


// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing (한가지 일만 하도록 작성해야함)
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint  // 한가지 일만 하도록 나눌 수 있을지 고민해보기
// function is object in JS  // 함수를 변수처럼 사용할 수 있음
function printHello() {
    console.log('Hello');
}
printHello();

// type을 명시하지 않기 때문에 명확하게 사용하기 어려움 -> TypeScript 이용 
// function log(message : string) : number {}     // number는 return type
function log(message){
    console.log(message);
    return 0;
}
log('Hello');
log(2);

// 2. Parameters 
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)  // 파라미터를 전달하지 않을 때 미리 정해둔 값으로 설정
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)   // 3개의 인자가 배열 형태로 전달됨 // args는 배열  
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);  
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');


// Local scope
let globalMessage = 'global';  // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hi';
    }
    // console.log(childMessage);  // Error
    return undefined;  // default return type, 안써도 무방 
}
printMessage();


// 6. Return a value
function sum (a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(result);


// 7. Early return, early exit  // block 안 logic이 길어지지 않도록 
// bad 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good 
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}


// First-class function 
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)  // 위의 sum 같은 함수는 스크립트 상 선언 위치 상관없이 호출 가능 
// a function expression is created when the execution reaches it.  // print같이 함수 expression은 할당 이후에만 호출 가능 
const print = function () {  // Anonymous function 
    console.log('print');
}; 
print();
const printAgain = print;
printAgain();


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function // 이름 없음 
const printYes = function () {
    console.log('yes!');
};

// named function 
// better debugging in debugger's stack traces 
// recursions 
const printNo = function print() {
    console.log('no!');
};
randomQuiz ('wrong', printYes, printNo);
randomQuiz ('love you', printYes, printNo);


// Arrow function
// always anonymous 
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => {
    // do something more
    return a + b;
};

// IIFE: Immediately Invoked Function Expression  // 선언함과 동시에 호출 // 최근에는 많이 쓰이지는 않음
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder)

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            console.log('wrong command');
            // throw Error('unknown command');
            break;
    }
    return 0;
}

console.log(calculate('d', 1, 3));