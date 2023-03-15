'use strict';

// Java is synchronous.  동기적임
// 호이스팅 이후부터 코드 순서대로 실행함 
// hoisting: var, funcion declaration 선언들이 제일 위로 올라가는 것 

console.log('1');
// browser API => browser에 요청, 응답을 기다리지 않고 다음 실행  == 비동기적인 실행 
setTimeout(() => console.log('2'), 1000);  // msec
console.log('3');


// Synchronous callback : 즉각적 동기적으로 실행 
function printImmediately(print) {   // hoisting
    print();
}
printImmediately(()=> console.log('hello'));

// Asynchronous callback : 언제 실행할지 예측 불가
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

// 자스에서는 콜백을 이런식으로 사용, 동기/비동기적으로 모두 사용 가능 

// Callback Hell example : 너무 어려워요 < ... > 콜백지옥! 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
            );
    },
    error => {console.log(error)}
);