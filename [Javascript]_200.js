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
