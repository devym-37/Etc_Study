const crypto = require("crypto");

const secret = "abcdefg";
const hash = crypto
  .createHmac("sha256", secret) // (알고리즘 방식, salt)
  .update("I love cupcakes") // (Hashing할 값)
  .digest("hex"); // (인코딩 방식)
console.log(hash);

// prints :
// c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

const crypto = require("crypto");

const secret = "abcdefg";
const hash = crypto
  .createHmac("sha256", secret)
  .update("I love cupcakes")
  .digest("base64");
console.log(hash);

// prints : base64가 hex보다 짧게 변환
// wPobwAUxvXjvOMYoRJxRAq6r1Jtdw6KlFupuqVnWZY4=
