'use strict';
// Object-oriented programming
// class: template 
// object: instance of a class   // 템플릿을 이용해 데이터를 넣어 만든 실체
// JavaScript classes 
// - introduced in ES6
// 클래스 없이 바로 object를 만들 수 있고, function으로 템플릿을 만드는 방법이 있었음 
// - syntactical sugar over prototype-based inheritance 

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    //methods 
    speak() {
        console.log (`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) { 
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);  // 내부적으로 getter setter를 이용함?


// 3. Fields (public, private)

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods 
// 오브젝트와 상관없이 공통적으로 클래스에서 쓸 수 있는거라면 static 사용하는게 메모리 효율적 
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();


// 5. Inheritance 
// a way for one class to extend another class.
class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    // Overiding : 필요한 함수만 재정의 
    draw() {
        super.draw();
        console.log('🔺'); 
    }
    getArea() {
        return this.width * this.height / 2;
    }

    toString() {  // Object 클래스의 함수 오버라이딩 
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 모든 클래스는 Object 클래스를 상속 
