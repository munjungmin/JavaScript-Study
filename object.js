// Objects 
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object();   // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;   
console.log(ellie.hasJob);

  // can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); 

// 2. Computed properties (배열처럼 property 접근)
// key should be always string 
console.log(ellie.name);         // 코딩할 땐 dot을 쓰는게 맞음 
console.log(ellie['name']);      // 정확하게 어떤 key가 필요한지 모를때?
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {  // 알아서 object를 생성해줌 
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {   // 속성 이름이 들어감
    console.log(key);
    console.log(ellie[key]);
}

// for (value of iterable)   //object같은건 못쓰고 배열처럼 iterable한 것만 가능 
const array = [1, 2, 4, 5];
for (value of array) {    // 값
    console.log(value);
}

for (key in array) {
    console.log(key);
}


// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...] )
const user = {name: 'ellie', age: '20'};
const user2 = user;      // user, user2의 ref가 같은 object메모리를 가리킴, 
user2.name = 'coder';  
console.log(user);

// 오브젝트를 복제하려면  
// old way 수동적 방법 
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.log(user3);
user.name = 'change';
console.log(user);
console.log(user3);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red', size: 'small'};
const fruit2 = {color: 'blue'};
const mixed = Object.assign( {}, fruit1, fruit2);   // 뒤의 object가 앞을 덮어씌움 그래서 fruit2의 property 값이 mixed에 저장
console.log(mixed.color);
console.log(mixed.size);


// deep copy : copy본과 원본이 같은 reference를 공유하지 않음 -> 주소를 복사해서 공유하는 것이 아니라 새로운 객체에 속성값만 복사
// shallow copy : 주소값을 복사 
// assign()도 1차원까지만 deep copy가 가능함
