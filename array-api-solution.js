// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|');
  console.log(result);
}
console.clear();

// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  const result = fruits.split(',', 2);    // seperator μ λ¬ νμ
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);   // array μμ²΄λ λ°λμ΄μμ 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0, 2);  // start, how many
  //console.log(result);  // μλ¦° λΆλΆμ΄ return 
  //console.log(array);

  const result2 = array.slice(2, 5);  // μνλ λΆλΆλ§ return νκ³  μΆμλ
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

  const result2 = !students.every((student) => student.score >= 50);  // λͺ¨λ  νμλ€μ΄ 50μ  μ΄μμ μ μλ₯Ό κ°μ ΈμΌ true λ¦¬ν΄
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

// λλ¬΄ μ΄λ €μμ.....


// ν λΌ {key, value} λ‘ μ μ‘ 
// λ°μ λλ λ§μ°¬κ°μ§, 

// json κ³΅λΆ λ°©λ² 
// objectλ₯Ό μ΄λ―κ² serilaize, deserializeν  μ§ 
