import fs from "fs";



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


fs.writeFile("newFile.txt", "this is the first file for testing.", "utf8", (err) => {
  if (err) console.error(err);
});

// fs.appendFileSync("newFile.txt", "\nthis is the second line.", "utf8");
fs.appendFile("newFile.txt", "\nthis is the second line.", "utf8", (err) => {
  if (err) console.error(err);
});


// existance
// console.log(fs.existsSync("newFile.txt"));


// delete
function deleteFile(path) {
    fs.unlinkSync(path);
}
deleteFile("./assets/newFile.txt");