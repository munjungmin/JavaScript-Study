// async & await
// clear style of using promise :) Syntatic sugar 

// 1. async
// 코드 블럭이 자동으로 promise로 바뀌게 됨 
async function fetchUser() {   
    // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 동기적 처리를 하기 때문에 시간이 오래 걸리는 작업을 동기적으로 수행하면 효율성 떨어짐 


// 2. await
function delay(ms) {
    return  new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);   // delay가 끝날 때까지 기다림 
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

async function pickFruits() {
    const applePromise = getApple(); // 병렬 실행
    const bananaPromise = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
   return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); 