// Write a function listAllJsRecursive(path: string) to
// console.log the paths of all the JS files within a particular folder including all subfolders.
import { readdir } from "fs/promises";
import path from "path";
async function listAllJsRecursive(myDir: string) {
  try {
    const files = await readdir(myDir);
    // console.log(files); == ex1.ts
    // if Dir == true, read->

    for (const file of files) {
      const fullPath = pathJoin(myDir, file);
      // todo :: subfolder
      if (file.endsWith(".ts")) {
        console.log(fullPath);
      } else {
        // check isDirectory
        listAllJsRecursive(fullPath);
      }
    }
  } catch (err) {
    console.error(err);
  }
  //console.log(if == .js)
}

listAllJsRecursive("/Users/yuyuovo/Documents/teckyio/WSP004/WSP004");

function pathBaseURL(dirPath: string, fileType: string) {
  return path.basename(dirPath, fileType);
}

let baseURL = pathBaseURL(
  "{YourDirPath}",
  ".ts"
);
console.log("test file type function", baseURL);

function pathJoin(myDir: string, filename: string) {
  return path.join(myDir, filename);
}
