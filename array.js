'use strict';

// Array

// 1. Declaration 
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// print all fruits 
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of 
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear();
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshitf: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shitf, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('π₯', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1);  // start ~ deleteCount?  λ¬Όμνλ optionalμ μλ―Έλ‘ μΈμλ₯Ό μλ£μ΄μ€λ λ¨
console.log(fruits);
fruits.splice(1, 1, 'π', 'π');   // 1λ² index μ­μ  ν κ·Έ μλ¦¬μ μ¬κ³Όμ λ³΅μ­μ μΆκ°
console.log(fruits);

// combine two arrays
const fruits2 = ['π', 'π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π'));


// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));   // κ°μ₯ λ§μ§λ§μ λμ¨ index λ¦¬ν΄ 



