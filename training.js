//  B-Task: 
// Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin. 
// Masalan: getDigits("ag1aw5g6") return qilsin 3

// Yechim

function getDigits(str){
let num = str.match(/\d/g);
console.log('stringda mavjud raqamlar soni:', num.length);
}
getDigits("fh00865bg739fyyh8495dv6gu85rhb8234567");


