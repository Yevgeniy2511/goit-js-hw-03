
function slugify(title) {
    const arr = title.toLowerCase().split(" ");
    const jointArr = arr.join("-")
     return jointArr;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"




// Алгоритм:
// 1. Зробити із рядка масив, розбити за пробілами, перевести в нижній регистр
// 2. З'єднати масиви через дефіс



