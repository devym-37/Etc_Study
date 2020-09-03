function foo() {
  return 0;
}

new foo(); // new연산자를 이용하여 return 값이 없어도 명시적으로 객체를 반환

const bar = function bar() {};

// es6 이후
// 1. 화살표 함수
const math = () => {};
// 모든 자바스크립트는 식, 문으로 나뉠 수 있다.
// 실행의 결과가 값으로 마무리 되면 --> 식
// if문 / 반복문
// 식과 문의 차이는 ; 이다.

const person = {
  name: "lee",
  getName() {
    return this.name;
  },
};

// this가 결정되는 순간
// 실행컨텍스트 맥락상 this 값 설정

// redux - app 하나당 store 하나 생성
function createStore() {
  return {};
}
