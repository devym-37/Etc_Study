const posts = [
  {
    title: "Post One",
    body: "this is post one"
  },
  {
    title: "Post Two",
    body: "this is post two"
  }
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPost)
//   .catch(err => console.log(err));

// Async / Await
// async function init() {
//   await createPost({ title: "Post Three", body: "This is post three" });

//   getPost();
// }

// init();

// Async / Await / Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaeholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

// Promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbyd")
// );
// const promise4 = fetch("https://jsonplaeholder.typicode.com/users").then(res =>
//   res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//   console.log(values)
// );
