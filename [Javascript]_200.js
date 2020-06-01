// Javasscript 200제

let obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

let { a, c } = obj;
console.log("a", a); // 1
console.log("c", c); // 30
// 원하는 속성명을 넣으면, 비구조화하여 해당 속성명에 따른 값을 각 변수에 할당한다.

let { a: newA = 10, f: newF = 5 } = obj;
// a:newA=10은 객체의 a 속성값을 새로운 변수 newA로 다시 할당하되, undefined로 값이 없는 경우에는 기본값 10을 할당한다는 의미.

// 스코프 체인 이해하기
// 실행 컨텍스트와 렉시컬 환경에 대해 알아야 한다.

// arrow function
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원한다. 자바의 클래스 기반과의 큰 차이점으로 프로토타입으로 객체에 공통 사항을 적용할 수 있다.

const studentProto = {
  gainExp: function () {
    this.exp++;
  },
};

const harin = {
  name: "하린",
  age: 10,
  exp: 0,
  __proto__: studentProto,
};

// 생성자 함수 : 객체를 생성하는 역할을 하는 함수. new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하며 새로운 객체를 반환하지 않는다.
// 객체에 타입이 적용되면 해당 객체는 그 타입의 '인스턴스'라고 한다.
/*
객체 생성 과정
1. 빈 객체를 만든다.
2. 만든 빈 객체를 this에 할당
3. 생성자 함수 바디의 코드를 실행한다. (this에 속성 및 메소드 추가)
4. 만든 빈 객체의 __proto__에 생성자 함수의 prototype 속성을 대입
5. this를 생성자의 반환값으로 변환
*/

// 프로토타입 기반 상속

function Storage() {
  this.dataStore = {};
}
Storage.prototype.put = function (key, data) {
  this.dataStore[key] = data;
};
Storage.prototype.getData = function (key) {
  return this.dataStore[key];
};

function RemovableStorage() {
  Storage.call(this);
}

// ES6 class
// ex) 붕어빵은 객체 붕어빵 틀이 클래스
// 클래스를 통해 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다.
// 특정 클래스를 통해 만들어진 객체를 해당 클래스의 인스턴스.

class Cart {
  constructor() {
    this.store = {};
  }

  addProduct(product) {
    this.store[product.id] = product;
  }

  getProduct(id) {
    return this.store[id];
  }
}
// 클래스 상속 이해
class Chart {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drawLine() {
    console.log("draw line");
  }
}

class BarChart extends Chart {
  constructor(width, height) {
    super(width, height);
  }

  draw() {
    this.drawLine();
    console.log(`draw ${this.width} X ${this.height} barChart`);
  }
}

// class 정적 메소드와 속성
// 일반적인 메소드는 해당 클래스의 인스턴스를 통해 호출한다. 하지만 정적 메소드는 클래스를 통해 직접 호출하는 메소드를 말한다. 'static' 키워드를 사용
class Product {
  static build(name, price) {
    const id = Math.floor(Math.random() * 1000);
    return new Product(id, name, price);
  }

  static getTaxPrice(product) {
    return product.price * 0.1 + product.price;
  }

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class DeposableProduct extends Product {
  depose() {
    this.deposed = true;
  }
}

// module
// import / export 키워드 사용

export function hello(name) {
  console.log(`hello ${name}`);
}

import { hello } from "./hello.js";

hello("es6 module");

/*번들링(Bundling) : 번들링은 의존 관계가 형성된 모듈들을 하나의 파일로 묶어준다. 
그리고 애플리케이션이 구동할 때 묶여진 이 파일을 로드한다. 번들링은 개발 시점에 이루어지게 되고
브라우저에서 이루어지지 않고 대체로 node.js 환경에서 이루어지게 된다. 대표적으로 Webpack이 있다. */

// ES6 모듈 시스템에서는 default 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있다.
// default 키워드 사용에 있어, 하나의 모듈에서 한 번만 사용할 수 있다. 즉, 한 파일에서는 하나의 값만 default로 정의 할 수 있다.
