// You can look at the method fs.promises.readdir and fs.promises.stat for more insight.
// You can choose to write in Promise or Async/Await.
// import { readFile } from "node:fs";
import { readdir } from "fs/promises";
import path from "path";

// fs.promises.readdir;
// async function -> await result

async function listAllJs(myDir: string) {
  try {
    const files = await readdir(myDir);
    // console.log(files); == ex1.ts
    for (const file of files) {
      const fullPath = pathJoin(myDir, file);
      console.log(fullPath);
    }
  } catch (err) {
    console.error(err);
  }
}

async function Recursion(x: number) {
  const result = await Show(); //await
  console.log("step 2(not async)", result);
  console.log("step 3", x + result);
}

function Show() {
  return 1;
}

Recursion(2);
Recursion(5);
// params = dirPath
listAllJs("/Users/yuyuovo/Documents/teckyio/WSP004/WSP004");
// success file name
// .gitignore
// app.ts
// ex1.ts
// ex2.ts
// mytest.json
// node_modules
// package-lock.json
// package.json

/* 
It should print something like:

/Users/alex/Documents/tecky-exercises/main.js
/Users/alex/Documents/tecky-exercises/001.js
...

*/

// last file
// function pathBaseURL() {
//   return path.basename("/Users/yuyuovo/Documents/teckyio/WSP004/WSP004/ex1.ts");
// }

// let basenameUrl = pathBaseURL();
// console.log("line58", basenameUrl);

function pathJoin(myDir: string, filename: string) {
  return path.join(myDir, filename);
}

// let joinedPath = pathJoin(
//   "/Users/yuyuovo/Documents/teckyio/WSP004/WSP004/",
//   "ex1.ts"
// );
// console.log(joinedPath);
