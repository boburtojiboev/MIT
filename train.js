
// 📌  C-Task: 
// Shunday function tuzing, u 2ta string parametr ega bolsin, 
// Hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
// MASALAN checkSimilarity("laepp", "apple") true return qiladi.
function  checkSimilarity(str1, str2) {
    let new_str1 = str1.toLowerCase();
    let new_str2 = str2.toLowerCase();
    for (const character of new_str1) {
        const characterIndex = new_str2.indexOf(character);
        if (str1.length == str2.length && characterIndex !== -1) {
            return true
        } else {
            return false;
        }
    }
}
const javob1 = checkSimilarity("leapp", "apple");
console.log("javob1:", javob1);
console.log("============2-yechim=============");
function check(a, b){
    let A = a.split("").sort().join("");
    let B = b.split("").sort().join("");
    console.log("javob2:", A == B);
  }
  check('leapp', 'apple');
