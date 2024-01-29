function makeArray(firstArray, secondArray, maxLength) {
    const concatArr = firstArray.concat(secondArray);
    const lengthArr = concatArr.length;
    if (lengthArr >= maxLength) {
        return (concatArr.slice(0, maxLength));
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []



// Алгоритм:
// 1. Об'єднуємо два масива
// 2. Вмірюємо довжину нового об'єднанного масиву
// 3. Якщо довжина нового масиву більша за значення maxLength, то повертаємо масив розміром maxLength, в іншому випадку повертаємо весь масив