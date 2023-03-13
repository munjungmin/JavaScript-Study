// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) 
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);  // double quote (JSON의 규격 사항)

const rabbit = {
    nick: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${rabbit.nick} can jump!`);
    },
};

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'nick'? 'ellie' : value;
});  // 원하는 것만 json으로 생성 가능 
console.log(json);   // 함수는 오브젝트에 있는 데이터가 아니기 때문에 제외, js에만 있는 특별한 데이터도 포함 x (symbol같은) 

// 2. JSON to Object 
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();   // error 

/*
rabbit to JSON : not include function member (jump), only data field
JSON to obj : so JSON doesnt have jump function, obj도 jump()를 가질수없음 

*/

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());   // error 
// rabbit에서는 Date 타입이지만 JSON으로 만들때 string이 됨 
// 그게 다시 obj로 parse할 때 string으로 바뀌어서 Date의 function을 쓸 수 없음 

