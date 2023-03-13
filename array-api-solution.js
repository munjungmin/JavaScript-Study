// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|');
  console.log(result);
}
console.clear();

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 2);    // seperator 전달 필수
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);   // array 자체도 바뀌어있음 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0, 2);  // start, how many
  //console.log(result);  // 잘린 부분이 return 
  //console.log(array);

  const result2 = array.slice(2, 5);  // 원하는 부분만 return 하고 싶을때
  console.log(result2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90 );
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);  // 모든 학생들이 50점 이상의 점수를 가져야 true 리턴
  console.log(result);
}

// Q9. compute students' average score
{ // I cant understand...;;
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result/students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90' 

// 너무 어려워요.....


// 토끼 {key, value} 로 전송 
// 받을 때도 마찬가지, 

// json 공부 방법 
// object를 어덯게 serilaize, deserialize할 지 
