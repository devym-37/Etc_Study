var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  var childTree = new Tree(child);
  this.children.push(childTree);
};

Tree.prototype.map = function(callback) {
  var mapTree = new Tree(callback(this.value));
  function reccTree(prevTree, nextTree) {
    for (var i = 0; i < prevTree.children.length; i++) {
      nextTree.addChild(callback(prevTree.children[i].value));
      reccTree(prevTree.children[i], nextTree.children[i]);
    }
  }
  reccTree(this, mapTree);
  return mapTree;
};

// self02 pseudo
var Horse = function(name) {
  this.name = name;
};

Horse.prototype.goSomeshere = function(destination) {
  return this.name + " is galloping to " + destination + "!";
};

var FlyingHorse = function(name, color) {
  Horse.call(this, name);
  this.color = color;
};

FlyingHorse.prototype = Object.create(Horse.prototype);
FlyingHorse.prototype.constructor = FlyingHorse;

FlyingHorse.prototype.goSomeshere = function(destination, milesToDestination) {
  if (milesToDestination < 10) {
    return Horse.prototype.goSomeshere.call(this, destination);
  } else {
    return this.name + " is flying to " + destination + "!";
  }
};

// self 02 - client

var getData = function() {
  window
    .fetch("https://jsonplaceholder.typicode.com")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      displayData(json);
    });
};

function createMessage(data, user) {
  let post = document.getElementById("post");
  let onePost = document.createElement("div");
  onePost.className = "onePost";
  let userId = document.createElement("div");
  userId.className = "userId";
  let userTitle = document.createElement("div");
  userTitle.className = "userTitle";

  userId.innerHTML = user;
  userTitle.innerHTML = data.title;

  onePost.appendChild(userId);
  onePost.appendChild(userTitle);

  post.appendChild(onePost);
}

var displayData = function(data, user) {
  for (let i = 0; i < data.length; i++) {
    createMessage(data[i], user);
  }
};

// react

import React from "react";

const FishTable = props => {
  return (
    <div>
      {props.fishes.map((fish, index) => {
        <FishTables fish={fish} key={index} />;
      })}
    </div>
  );
};

// self 04
var fs = require("fs");
var path = require("path");

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, "utf-8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(" ").length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    var countOne = data;
    getWordCount(filePathTwo, function(err, data) {
      if (err) {
        callback(err, null);
        return;
      }
      var countTwo = data;
      callback(null, countOne + countTwo);
    });
  });
};

// server.js
http.createServer(function(req, res) {});

var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");
  if (request.method === "POST") {
    if (isNaN(globalCounter[property])) {
      globalCounter[property] = 0;
    }
    globalCounter[property]++;
    response.statusCode = 200;
    response.end();
  } else if (request.method === "GET") {
    var value = globalCounter[property];
    // console.log("111111", globalCounter[property]);
    var returnData = JSON.stringify(value);
    response.statusCode = 200;
    response.end(returnData);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// fetch
fetch(url)
  .then(res => {
    console.log(res);
    // res : response의 instance로 여러 정보를 담고 있다.
    // 일단, 우리가 원하는 정보가 바로 나오지는 않는 다는 것을 인지
    // 따라서 우리가 원하는 정보로 다음. then()으로 넘겨준다.
    // res.json()을 통해 원하는 정보를 얻는다.
    return res.json();
  })
  .then(res => {
    console.log(res);

    // res : 위의 .then()에서 return 해준 결과를 뜻한다.
  });

//basic-server
const http = require("http");

const PORT = 5000;

const ip = "localhost";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.url === "/lower") {
      let data = "";
      req.on("data", chunk => {
        data += chunk;
      });
      req.on("end", () => {
        data = data.toUpperCase();
        res.writeHead(200);
        res.end(JSON.stringify(data));
      });
    } else {
      res.writeHead(400);
      res.end();
    }
  }
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
  }
});
server.listen(PORT, ip, () => {
  console.log("server on");
});

// express
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", routes);

app.listen(5000, () => {
  console.log("5000 server on");
});
