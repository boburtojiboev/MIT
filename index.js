// Module package External
// require boyicha mashq


// const moment = require("moment");
// const time = moment().format();
// console.log(time)
  
// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000)

// inquirer boyicha mashq
// const inquirer = require('inquirer');
// inquirer
//   .prompt([{type: "input", name: "raqam", massage: "raqamni kiriting?"}])
//   .then((answer) => {
//     console.log("men kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// validator mashqlari
// const validator = require('validator');
// // const test = validator.isEmail("foo@bar.com");
// const test = validator.isInt("73");
// console.log("test", test);

// uuid mashq
// const { v4: uuidv4} = require("uuid");
// const random = uuidv4();
// console.log("random", random);

// const chalk = require('chalk');
// const log = console.log;

// log(chalk.blue(`uuid creates: ${random}`));


// Module packege FILE
// const colculate = require('./hisob.js');
// const natija = colculate.kopaytirish(80, 20);
// console.log('natija', natija);

// console.log("=============");
// const natija2 = colculate.qoshish(70, 29);
// console.log("natija2", natija2);
// console.log("=============");

// const natija3 = colculate.ayirish(80, 20);
// console.log("natija3", natija3);

// console.log(require('module').wrapper);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();
console.log("======================");
const myAccount = new Account('martin', 200000, 973454745554);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);
myAccount.tellMeBalance();

// ferari 400000$
myAccount.withdrowMoney(400000);
// deposit qoydik 200000$
myAccount.makeDeposit(200000);

