// Modul package CORE
 
// setTimeout(function(){
//     console.log("ishga tushdi");
// }, 5000)

// let number = 0;
// setInterval(function(){
//     console.log("hisobla", number);
// //     number++;

// }, 1000);

const fs = require('fs');
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

console.log("*******************");

fs.writeFileSync("./input.txt", `${data} \n\t\t by Simon`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);
// Module packege EXTERNAL
// Module packege FILE