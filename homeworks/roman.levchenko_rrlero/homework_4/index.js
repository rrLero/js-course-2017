// first Sum - if sum of all 'A' or 'a' equal to sum 'M' or 'm'
const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const makeRandStr = (str) => (str.length < 30) ? makeRandStr(str + possible.charAt(Math.floor(Math.random() * possible.length)))
    : str + possible.charAt(Math.floor(Math.random() * possible.length));

const arrayOfStrings = new Array(100).fill(0).map(() => makeRandStr(''));

const getLetterQuantity = (arrayOfSymbols, letter) => arrayOfSymbols.reduce((prev, cur) => (cur.toLowerCase() === letter) ? ++prev : prev, 0);

const newArray = arrayOfStrings.map((a) => getLetterQuantity(a.split(''), 'm') === getLetterQuantity(a.split(''), 'a') ? 1 : 0);

console.log(arrayOfStrings);
console.log(newArray);

// second Sum: check valid credit number
const validArray = ['5465763102647518', '5115459511709171', '5369737555196196', '5452759340862740', '5255484275893763'];
const unValidArray = ['4561261212345464', '153454654654', '45645645646547', '12345677000', '35454468'];

const getEvenOddNumber = (arrayDigits, odd) => arrayDigits.reduce((prev, curr, index) => (index % 2 === odd) ?
    (2 * curr > 9) ? 2 * curr - 9 + +prev : 2 * curr + +prev : +prev + +curr, 0);

const trueNumber = (num) => (num.split('').length % 2) ?
    !(getEvenOddNumber(num.split(''), 1) % 10) : !(getEvenOddNumber(num.split(''), 0) % 10);

console.log(validArray.map(trueNumber));
console.log(unValidArray.map(trueNumber));
