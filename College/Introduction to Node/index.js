import fs from "fs";
import path from "path";

// reading

// function customReadFileSync() {
//     if (fs.existsSync('text.txt')) {
//         // read file
//         try {
//             const data = fs.readFileSync('text.txt', 'utf8');
//         } catch (error) {
//             console.error(error);
//         }
//     } else {
//         console.log('File does not exist');
//     }
// }

// function customReadFile() {
//   if (fs.existsSync("text.txt")) {
//     // read file
//     try {
//       fs.readFile("text.txt", "utf8", (err, data) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log(data);
//         }
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   } else {
//     console.log("File does not exist");
//   }
// }

// customReadFile();

// writing

// fs.writeFile("newFile.txt", "this is the first file for testing.", "utf8", (err) => {
//   if (err) console.error(err);
// });

// fs.appendFileSync("newFile.txt", "\nthis is the second line.", "utf8");
// fs.appendFile("newFile.txt", "\nthis is the second line.", "utf8", (err) => {
//   if (err) console.error(err);
// });

// existance
// console.log(fs.existsSync("newFile.txt"));

// delete
function deleteFile(path) {
  fs.unlinkSync(path);
}

// deleteFile("./assets/newFile.txt");

// rename
// fs.rename("newfile.txt", "renamedFile.txt", () => {})

// fs.renameSync("./done/newFile.txt", "./done/renamedFile.txt");

// copy
// fs.copyFileSync("renamedFile.txt", "./renamedFile2.txt");

// fs.copyFile("renamedFile.txt", "./renamedFile2.txt", () => {});

// move
// fs.rename("file.txt", "folder/file.txt", (err) => {
// if (err) throw err;
// });

// Create Directory
// fs.mkdir("newFolder", (err) => {
// if (err) throw err;
// });

// Delete Directory
// fs.rmdir("folder", (err) => {});

// function addTextToFile(path, text) {
//   try {
//     const data = fs.readFileSync(path, "utf8");

//     fs.appendFileSync(path, text, "utf8");

//   } catch (err) {
//     console.error(err);
//   }
// }
// addTextToFile("./done/renamedFile.txt", "\nthis is the third line.");

// Problem: Generate Folder Structure from Object
const fsTree = {
  type: "folder",
  name: "parent",
  children: [
    { type: "file", name: "first.txt" },
    { type: "file", name: "second.txt" },
    {
      type: "folder",
      name: "child",
      children: [{ type: "file", name: "first.txt" }],
    },
  ],
};

// Solution:
function createFS(node, basePath) {
  const currentPath = path.join(basePath, node.name);
  if (node.type === "folder") {
    // Create folder
    fs.mkdir(currentPath, { recursive: true }, (err) => {
      if (err) throw err;
      // Process children after folder is created
      if (node.children) {
        node.children.forEach((child) => {
          createFS(child, currentPath);
        });
      }
    });
  } else if (node.type === "file") {
    // Create file
    fs.writeFile(currentPath, "", (err) => {
      if (err) throw err;
    });
  }
}
// Run
createFS(fsTree, process.cwd());
