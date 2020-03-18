// file system

// fs 모듈 사용
var fs = require("fs");
// 비동기방식의 파일읽기. 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
fs.readFile("home.js", "utf-8", function(error, data) {
  console.log(data);
});
// 동기방식의 파일읽기. 파일을 읽은 후 data 변수에 저장
var data = fs.readFile("home.js", "utf-8");
console.log(data);

// 파일 쓰기
// 새로 생성할 파일에 입력될 문자열
var data = "my data...\r\nhello there";
// 비동기 방식으로 파일을 생성, 함수의 인자는 앞에서 부터 순서대로 파일명, 입력데이터, 인코딩, 콜백함수
fs.writeFile("file01.txt", data, "utf-8", function(e) {
  if (e) {
    // 파일 생성 중 오류가 발생하면 오류출력
    console.log(e);
  } else {
    // 파일 생성 중 오류가 없으면 완료 문자열 출력
    console.log("Done");
  }
});

// 동기방식은 callback 함수를 통한 오류처리를 할 수 없기 때문에 함수전체를 try 문으로 예외처리
try {
  // 동기 방식으로 파일을 생성. 함수의 인자는 앞에서 부터 순서대로 파일명, 입력데이터, 인코딩
  fs.writeFileSync("file02_sync.txt", data, "utf-8");
  console.log("02 WRITE DONE!");
} catch (e) {
  console.log(e);
}

// request_file.js
var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(request, response) {
  var parseUrl = url.parse(request.url);
  var resource = parseUrl.pathname;

  // 요청된 자원이 /hello 이면
  if (resource === "/hello") {
    // hello.html 파일을 읽은 후
    fs.readFile("hello.html", "utf-8", function(error, data) {
      // 읽으면서 오류가 발생하면 오류의 내용을
      if (error) {
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 error : " + error);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404");
  }
});

// http request 객체
var http = require("http");

var server = http.createServer(function(request, response) {
  console.log(request);
});

server.listen(8080, function() {
  console.log("Server is running...");
});
// 700줄에 달하는 코드가 출력

//
let body = [];
request
  .on("data", chunk => {
    body.push(chunk);
  })
  .on("end", () => {
    body = Buffer.concat(body).toString();
    // body에 전체 요청바디가 문자열로 담겨있다.
  });

// 서버 만들기
const http = require("http");
http
  .createServer((request, response) => {
    return request
      .on("error", err => {
        console.error(err);
      })
      .on("data", data => {
        // 요청에 데이터가 있으면
        console.log(data);
      })
      .on("end", () => {
        // 요청에 데이터가 모두 받아졌으면
        response.on("error", err => {
          console.error(err);
        });
        response.statusCode = 200; // 성공상태코드
        response.setHeader("Content-Type", "text/plain");
        response.write("hi\n"); // body에 정보 탑재
        response.end("the end"); // 정보 탑재 후 브라우저로 전송
      });
  })
  .listen(8080);
//
////
const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((request, response) => {
    const path = url.parse(request.url, true).pathname; // url에서 path 추출
    if (request.method === "GET") {
      // GET 요청이면
      if (path === "/about") {
        // 주소가 /about이면
        response.writeHead(200, { "Content-Type": "text/html" }); // header 설정
        fs.readFile(__dirname + "/about.html", (err, data) => {
          // 파일 읽는 메소드
          if (err) {
            return console.error(err); // 에러 발생시 에러 기록하고 종료
          }
          response.end(data, "utf-8"); // 브라우저로 전송
        });
      } else if (path === "/") {
        // 주소가 /이면
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + "/main.html", (err, data) => {
          if (err) {
            return console.error(err);
          }
          response.end(data, "utf-8");
        });
      } else {
        // 매칭되는 주소가 없으면
        response.statusCode = 404; // 404 상태 코드
        response.end("주소가 없습니다");
      }
    }
  })
  .listen(8080);

//------------------------------------

// express
const express = require("express");
const app = express(); // 서버의 일을 처리
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(8080, () => {
  console.log("Express App on port 8080!");
});
// http모듈은 express에서 내부적으로 처리하기 때문에 더이상 사용하지 않는다.

//------------Routing
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "html")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "main.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "about.html"));
});
app.listen(8080, () => {
  console.log("Express App on port 8080!");
});

//-------------Router 분리
// route.js
const express = require("express");
const path = require("path");
const router = express.Router(); // 라우터 분리
router.get("/", (req, res) => {
  // app 대신 router에 연결
  res.sendFile(path.join(__dirname, "html", "main.html"));
});
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "about.html"));
});
module.exports = router; // 모듈로 만드는 부분

//----

const route = require('./route.js');

app.use('/', route);
app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
});
app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});
app.listen(8080, ...);


//------------mysql
var sql = 'SELECT * FROM messages';
con.query(sql, function(err, rows, fields){
  res.send(rows)
})


//----------promise
new Promise((resolve, reject) => {

})

const successPromise = Promise.resolve('성공').then(); // 무조건 성공
const failurePromise = Promise.reject('실패').catch();

Promise.all()// 여러개의 프로미스 동시에 실행 가능 but 하나라도 실패하면 catch로

// Promise는 결과값을 가지고 있지만, then,catch를 붙이기 전까지 반환하지 않는 것

const promise = new Promise((res, rej) => {
  res('성공');
});
// 다른 로직 작성
promise.then()

// http 모듈 서버 이용
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('서버실행')
  res.write('Hello node');  // 반복 가능
  res.end('hello server');  // 응답이 끝났다는 상태를 알려주는것

  fs.readFile('./server.html', (err, data) => {
    if(err){
      throw err;
    }
    res.end(data);    // data 는 buffer의 형태
  })
}).listen(8080, () => {
  console.log('8080 포트에서 서버 대기')
});

server.on('listening', () => {
  console.log('good');
})
server.on('error', (error) => {
  console.error(error);
})

// 파일로 보내기



// callback 
setTimeout( function(){
  console.log('hello')
}, 1000);

// 
function delay(sec, callback){
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec*1000);
}

delay(1, result => {
  console.log(1, result);
})  // callback style

function delayP(sec){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec*1000);
  })
}

delayP(1).then(result => {
  console.log(1, result)
  return delayP(1);
}).then(result => {
  console.log(2, result)
})

// async / await
// async는 promise를 return
async function myFunc(){
  const time = await delayP(3); // await은 꼭 promise를 return 하는 함수가 아니여도 된다
  console.log(time);
  return 'async';
}

// 예외처리


// tree-map;
var Tree = function(value){
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(child){
  var childTree = new Tree(child);    // 자식 tree에 새로운 tree 구조 생성
  this.children.push(childTree);  // 자식에 새로운 자식 tree 구조 push
}

Tree.prototype.map = function(callback){
  // 빈객체 생성(callback 함수를 받는)
  var mapTree = new Tree(callback(this.value));
  // recursion 사용
  function reccTree(prevTree, nextTree){
    for(var i = 0; i < prevTree.children.length; i++){
      nextTree.addChild(callback(prevTree.children[i].value));
      reccTree(prevTree.children[i], nextTree.children[i]);
    }
  }
  reccTree(this, mapTree);
  return mapTree;
}


var TimeComplexity = {
  FIX_ME: "wrong answer",
  CONSTANT: "constant",
  LOGARITHMIC: "logarithmic",
  LINEAR: "linear",
  QUADRATIC: "quadratic",
  EXPONENTIAL: "exponential"
};


var server = http.createServer(function(req, res){
  var endpoint = url.parse(req.url, true).pathname;
  var property = endpoint.replace(/^\//,"");

  if(req.method==="POST"){

  }
})

// pseudo
var Grub = function(){
  this.age = 0;
  this.color = 'pink';
}
Grub.prototype.color = function(){
  console.log("mmmmmmm" + this.color)
}

var Bee = function(){
  Grub.call(this);
  this.age = 5;
  this.color = 'black';
}

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;


// ES6
class Grub {
  constructor(){
    this.age = 10;
    this.color = 'red';
  }
  // 내부에 함수 작성
  eat(){
    return 'MMMMMMM' + this.color;
  }
}

class Bee extends Grub {
  constructor(){
    super();  // Grub.call(this)
    this.age = 20;
    this.color = 'yellow';
  }
}

// stack
var Stack = function(){
  this.storage = {};
  this.count = 0;
}
Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function(){
  if(this.count <=0){
    return;
  }
  var pop = this.storage[this.count-1];
  delete this.storage[this.count-1];
  this.count--;
  return pop;
}

// queue