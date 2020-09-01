type Age = number; // type Alias를 선언할때; / 컴파일 되면 사라진다.

let age: Age = 10;

type Foo = {
  age: Age;
  name: string;
}; // 객체타입

interface Bar {
  age: Age;
  name: string;
} // type Alias와 interface 차이

const foo: Foo = {
  age: 10,
  name: "kim",
};

const bar: Bar = {
  age: 10,
  name: "kim",
};
