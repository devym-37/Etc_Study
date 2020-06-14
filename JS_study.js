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
