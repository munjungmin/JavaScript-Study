// 1. Use strict
// added in ES5
// use this for Valina Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName = 'global name';
{
    let naming = 'ellie';
    console.log(naming);
    naming = 'hello';
    console.log(naming);
}
// console.log(naming);  // error
console.log(globalName);

// before ES6, used var
//var의 경우 스코프가 '자신을 선언한 블록'이 아니라, 자신의 선언을 포함하는 함수라는 점입니다
// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope 
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
[]

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
  // 더 이상 작은 단위로 나눌 수 없음
// object, box container
// function, first-class function (다른 datatype처럼 변수로 사용 가능한 함수)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: Infinity, -Infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567891234567891234567891234567891234567890n;    // 마지막에 n을 붙여 bigInt 나타냄 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'breandan';
const greeting = 'hi' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;   // template literals (string) // 백틱을 이용해 변수 값이 붙여져서 string 생성 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, NaN, null, undefined, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
const nothing2 = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
console.log(`value: ${nothing2}, type: ${typeof nothing2}`);

// undefined 
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers or objects 
// 고유한 식별자가 필요할 때, string은 내용이 동일하면 동일한 식별자로 인식된다는 게 차이점 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false

const gSymbol1 = Symbol.for('id');  // Symbol.for() 내용이 같은 symbol이 있으면 return 없으면 새 symbol 생성  
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  // symbol 출력 시 string으로 변환 필요 
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};  // ellie가 가리키는 메모리 포인터는 const로 인해 잠겨있어 다른 object로 할당 불가, object안의 field값은 변경 가능
ellie.age = 30;


// 5. Dynamic typing: dynamically typed language
// 동적으로 결정되어 매우 유연하지만 그만큼 runtime error가 많이 발생해 TypeScript가 등장함
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;  // 문자열로 변환
console.log(`value: ${text}, type: ${typeof text}`);
text = 5 + '7';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);  // number....

text = 'a'/'2';  // number로 나오네 
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // **runtime Error 주의**