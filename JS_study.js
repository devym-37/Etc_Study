class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  static iAmAstaticMethod() {
    console.log(`I am a static message`);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

Animal.iAmAstaticMethod();

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();

// classes inheritance
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  logBreed() {
    console.log(`${this.name} is ${this.breed}`);
  }
  logEatFromDog() {
    super.eat();
  }
}

const mike = new Dog("Mike", 4, "Bulldog");
mike.logBreed();
mike.logEatFromDog();

// Syntax
/*
function * numbersGen(){
    const numOne = yield 1;
    const numTwo = yield 2;
    ...
}
const get = numbersGen();
*/
// Generators

// const getNumbers = function*() {
//   yield 1;
//   yield "hello";
//   yield true;
//   yield { name: "Alex" };
// };

// const numbersGen = getNumbers();

// console.log(numbersGen.next());

const getNumbers = function* (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    yield numbers[i];
  }
};

const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if (next.done) {
    console.log("this generator is done");
    clearInterval(interval);
  } else {
    const number = next.value;
    console.log(number);
  }
}, 1000);

/*
filter, includes, from을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환 
li>
apple
orange
banana
strawberry
*/

function print() {
  let list = document.querySelectorAll("li");
  let listArray = Array.from(list);
  let resultArray = listArray.filter((value) => value.innerText.includes("e"));

  return resultArray;
}

print();

// Object 선언 방법

function getObj() {
  const name = "crong";

  const getName = () => {
    return name;
  };

  const setName = (newName) => {
    name = newName;
  };

  return {
    getName,
    setName,
  };
}

let obj = getObj();

/*
Node.js 에서 예외 처리하기
1. 비동기(async) 모듈 또는 함수의 callback에서 첫번째 매개변수로 에러 정보를 반환한다. 이에 따라 비오기 모듈 또는 함수를 호출할 때에는 먼저 첫 번째 매개변수인 
에러정보를 확인해야 한다.
2. try-catch, throw이다. 이는 자바스크립트 예외 처리와 동일하게 처리한다. 다만 주의해야 할 점은 첫번째 방법에서 활용한 비동기 패턴에 try-catch throw를 적용하는 것은
잘못된 방법이다. 무조건 비동기 함수의 에러처리는 callback 함수를 활용해야 한다. 반대로 callback 함수로 처리하지 않는 기 외 패턴(동기-sync 패턴 등)에 대해서는 try-catch, throow를
적용하여 에러를 처리한다. 
*/

/*
Event Emitter
'어떤 사건의 발생' 이라는 측면에서 이벤트라고 부르며, 발생된 이벤트에 대한 응답으로 반응하는것을 리스너(listener)라고 한다. Event Emitter는 바로 이벤트-리스너 패턴으로 구현된다.
*/

class Emitter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach((listener) => {
        listener();
      });
    }
  }
}
