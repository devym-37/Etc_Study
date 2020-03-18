// 함수형 프로그래밍 다형성 높이기

// _keys
console.log(
  'Object.keys({name:"ID", age: 33})',
  Object.keys({ name: "ID", age: 33 })
);
console.log("Object.keys([1,2,3,4])", Object.keys([1, 2, 3, 4]));
console.log("Object.keys(null)", Object.keys(null)); // error 발생

function _is_object(obj) {
  return typeof obj === "object" && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}
// null 일때 해결

// _each 외부 다형성 높이기
_each(
  {
    13: "ID",
    19: "HD",
    29: "YD"
  },
  function(name) {
    console.log("name", name);
  }
);

// 컬렉션 중심 프로그래밍의 4가지 유형과 함수

var users = [
  {
    id: 10,
    name: "ID",
    age: 36
  },
  {
    id: 20,
    name: "BJ",
    age: 38
  },
  {
    id: 30,
    name: "JK",
    age: 32
  },
  {
    id: 40,
    name: "KE",
    age: 31
  },
  {
    id: 50,
    name: "SJ",
    age: 35
  },
  {
    id: 60,
    name: "AJ",
    age: 37
  }
];

// 1. 수집하기 - map, values, pluck ..

// - map
_map(users, function(user) {
  return user.name;
});

function _values(data) {
  return _map(data, function(val) {
    return val;
  });
}

function _identity(val) {
  return val;
}

function _values(data) {
  return _map(data, _identity);
} // _values()과 같은 값

console.log("users[0]", users[0]); //   { id: 10, name: "ID", age: 36 }
console.log("_keys(users[0])", _keys(users[0])); // [id, name, age]
console.log("_values(users[0])", _values(users[0])); // [10, ID, 36]

function _pluck(data, key) {
  return _map(data, function(obj) {
    return obj[key];
  });
}

_pluck(users, "age"); // [36, 38, ...]

// 2. 거르기 - filter, reject, compcat, without ..
_filter(users, function(user) {
  return user.age > 30;
});

function _reject(data, predi) {
  return _filter(data, function(val) {
    return !predi(val);
  });
}

function _negate(func) {
  return function(val) {
    return !func(val);
  };
}

function _reject(data, predi) {
  return _filter(data, _negate(predi));
}

var _compact = _filter(_identity);

_compact([1, 2, 0, false, null, {}]); // 1,2,{} 만 출력

// 3. 찾아내기 - find, some, every ..
function _find(list, predi){
    var keys = _keys(list);
    for(var i = 0; len = keys.length; i < len; i++){
        var val = list[keys[i]];
        if(predi(val)) return val;
    }
}

function _findIndex(list, predi){
    var keys = _keys(list);
    for(var i = 0; len = keys.length; i < len; i++){
        var val = list[keys[i]];
        if(predi(list[keys[i]])) return i;
    }
    return -1;
}

_some([1,2,3,10,20], function(val){
    return val > 10;
})      // 조건이 맞는 값이 하나라도 있으면 true 반환

_every([1,2,3,10,20], function(val){
    return val > 10;
})      // 모든 값이 조건에 맞아야 true 반환


// 4. 접기 - reduce, min, max, group_by, count_by

// reduce - 함수형적으로 생각하는 것이 중요

_min([1,2,3,4,5,-4]);   // 제일 작은 값을 return

_max([1,2,3,4,5,-4]);   // 제일 큰 값을 return

function _min(data){
    return _reduce(data, function(a, b){
        return a < b ? a : b;
    })
}


function _max(data){
    return _reduce(data, function(a, b){
        return a < b ? b : a;
    })
}

// min_by , max_by  다형성이 낮다. 보조함수 필요

function min_by(data, iter){
    return _reduce(data, function(a, b){
        return iter(a) < iter(b) ? a : b;
    })
}

console.log(min_by([1,2,3,4,5,-4], Math.abs));  // 1 출력

function max_by(data, iter){
    return _reduce(data, function(a, b){
        return iter(a) > iter(b) ? a : b;
    })
}

// group_by : 특정 조건의 데이터 형식으로 만들어주는 함수, push
var _group_by =  _curryr(function(data, iter){
    return _reduce(data, function(grouped, val){        
        var key = iter(val);
        (grouped[key] = grouped[key] || []).push(val);
        return grouped;
    }, {})
})

// _group_by(users, function(user){
//    return user.age;
//})

function _push(obj, key, val){
    (obj[key] = obj[key] || []).push(val);
    return obj;
}


var _group_by =  _curryr(function(data, iter){
    return _reduce(data, function(grouped, val){        
        return _push(grouped, iter(val), val);
    }, {})
})

// count_by

var _count_by = _curryr(function(data, iter){
    return _reduce(data, function(count, val){
        var key = iter(val);
        count[key] = count[key] ? count[key]++ : 1;
        return count;
    }, {})
})

var _inc = function(count, key){
    count[key] = count[key] ? count[key]++ : 1;
    return count;
}

// 지연 평가를 시작시키고 유지 시키는 함수 
// 1. map
// 2. filter, reject

// 끝을 내는 함수
// 1. take
// 2. some, every, find

// 함수형 자바스크립트 요약
/*
1. 함수를 되도록 작게
2. 다형성 높은 함수 만들기
3. 상태를 변경하지 않거나 정확히 다루어 부수 효과를 최소화 하기
4. 동일한 인자를 받으면 항상 동일한 결과를 리턴하는 순수 함수
5. 복잡한 객체 하나를 인자로 사용하기보다 되도록 일반적인 값 여러 개를 인자로 사용하기
6. 큰 로직을 고차 함수로 만들고 세부 로직을 보조 함수로 완성하기
7. 어느곳에서든 바로 혹은 미뤄서 실행할 수 있도록 일반 함수이자 순수 함수로 선언
8. 모델이나 컬렉션 등의 커스텀 객체보다는 기본 객체를 이용하기
9. 로직의 흐름을 최대한 단방향으로 흐르게 하기
10. 작은 함수를 조합하여 큰 함수를 만들기
---
데이터 흐름 프로그래밍의 중요성
Clojure / Elixir 
*/