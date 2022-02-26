### Garbage Collector

#### memory life cycle

1. Allocate memory

2. Use memory

3. Release memory

#### Memory references

: Javascript object has a reference to ist prototype(implicit reference) and to its properties' values(explicit reference) -> 명시적으로 선언한 property

reference counting -> 더 이상 참조가 일어나지 않는 변수는 지우는 역할 -> garbage collector
순환참조시 reference가 0이 될 수 없다. release memory가 될 수 없다.

#### Memory leaks : 메모리 누수

1. Global variables

```js
function foo(arg) {
    bar = "some test";
}
// equal
function foo(arg) {
    window.bar = "some test";
}
```

bar는 window 객체값이 되어 release memory가 되지 않는다

2. this
3. closures
4. DOM : DOM트리의 리프 노드나 내부 노드를 참조할 때 고려해야 할 것이 있다. 테이블 내의 셀 태그를 참조하고 있다가 해당 테이블을 DOM에서 제거한 상태에서 해당 셀에 대한 참조를 갖고 있다면 커다란 메모리누수가 일어날 수 있다. 해당 셀만 놔두고 나머지 부분을 가비지컬렉터가 반환시켜줄거라고 생각할지도 모른다. 실제로도 그렇지 않는다. 그 셀은 테이블의 자식노드이고 자식노드들은 부모에 대한 참조를 갖고 있기 때문에 테이블 셀에 대한 참조 하나만으로도 전체 테이블이 메모리에 남아 있게 된다.
