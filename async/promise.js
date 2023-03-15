'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending (make and being operated)-> fulfilled or rejected (성공 or 수행 실패)
// Producer vs Consumer : 정보 제공자와 소비자 

// 1. Producer (비동기적 실행)
// when new Promise is created, the executor runs automatically!!! 주의하세요
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)  // 파일을 읽어오거나 네트워크에서 데이터를 받아올 때는 비동기적으로 
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');  // 성공적으로 받아온 결과를 resolve로 전달 
        //reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {    // promise가 정상적으로 수행되어 resolve가 전달한 값을 파라미터로 받음
    console.log(value);    // chaining : then에서 return한 promise에 catch 등록 
    })
    .catch(error => {      // reject시 
        console.log(error);
    })
    .finally(() => {
        console.log('finally')   // resolve || reject 
    });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)   //then은 값을 바로 전달하거나 Promise를 전달할 수 있음 
    .then(num => num * 3)   // 다른 비동기적인 것들을 묶어서 처리 가능 
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(num-1), 1000);
        });
    })
    .then(num=>console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cook`), 1000);
});


getHen() //
.then(getEgg)
.catch(error=> {   // 바로 해결도 가능 
    return '🥖';
})
.then(cook)
.then(console.log)
.catch(console.log);



