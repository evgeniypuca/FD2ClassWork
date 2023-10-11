// #1 Решена
// Напишите функцию, которая принимает массив и переносит все 0 в конец,
// не изменяя порядок остальных элементов массива.

// Например:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    return arr.sort((a, b) => {
        if (a === 0 && b !== 0) {
            return 1;
        } else if (a !== 0 && b === 0) {
            return -1;
        } else {
            return 0;
        }
    });
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// #2
// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает массив с недостающей буквой. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'


function findMissingLetter(arr) {
    let str = arr.join('');
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        if (!str.includes(String.fromCharCode(str.charCodeAt(i+1)))) {
            console.log(String.fromCharCode(str.charCodeAt(i)));
        }
       // if ((arr[i + 1].charCodeAt(0)) - arr[i].charCodeAt(0) > 1) {
        //     secondaryArr.push(String.fromCharCode(arr[i].charCodeAt(+1)));
        // }
    }

}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));


// #3 решена
// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. 
// Люди могут "лайкать" сообщения в блогах,изображения или другие предметы. 
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию likes :: [String] -> String, которая 
// должна принимать входной массив, содержащий имена людей,которым нравится элемент. 
// Он должен возвращать отображаемый текст, как показано в примерах:

// Например:
// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

function likes(arr) {
    switch (arr.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${arr[0]} likes this`;
        case 2:
            return `${arr[0]} and ${arr[1]} like this`;
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
        default:
            return `${arr[0]}, ${arr[1]} and 2 others like this`;
    }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// #4 Решена
// Что такое анаграмма?
// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы. 
// Например: 'abba' & 'baab' == true
// Напишите функцию, которая находит все анаграммы слова из списка. 
// В качестве параметра даны слово и массив слов. 
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.
// Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']

function anagrams(word, arr){
    const sortsWord = word.split('').sort().join('');
    let finalArr = [];

    for (const elem of arr) {
        if (sortsWord === elem.split('').sort().join('')){
            finalArr.push(elem);
        }        
    }
    return finalArr;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// #5 решена
// Представим автобус, забирающий и высаживающий людей на каждой остановке. 
// Дан массив массивов, первый элемент которых равен числу пассажиров,
// вошедших в автобус на остановке, а второй - числу пассажиров,
// вышедших на остановке.

// Ваша Задача написать функцию, которая возвращает число людей,
// оставшихся в автобусе после последней остановки (массива).
// Хоть это и последняя остановка,
// в автобусе все еще находятся люди (они, наверное, уснули :D ).

// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0, 
// потому что автобус пустой на первой остановке.

// Например:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17

function busStops (arr) {
    let count = 0;
        for (const elem of arr) {
            count += elem[0];
            count -= elem[1];
        }
    return count;
}

console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

// #6 решена
// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.

// Например:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

function longest(str1, str2) {
    let secondaryStr = (str1 + str2).split('').sort();
    let finalStr = '';
for (const elem of secondaryStr) {
    if (!finalStr.includes(elem)){
        finalStr += elem;
    }
}
    return finalStr;
}
console.log(longest("xyaabbfdvdfvdfvdfvdfvbccccdefww", "xxxxyyyyabklmopq"));

// #7 решена
// Ваша задача написать функцию, которая принимает 
// в качестве параметра целое число и возводит в квадрат каждую цифру числа. 
// Результат также необходимо вернуть в виде целого числа.

// Например:
// squareDigits(9119) --> 811181

function squareDigits (num) {
        const strNum = num.toString();
        let resultNum = '';
        for (const elem of strNum) {
            resultNum += elem * elem;
        }
        return +resultNum;
}
console.log(squareDigits(9119));

// #8 решена
// Для того, чтобы обеспечить безопасность данных при оплате онлайн,
// нам необходимо замаскировать все цифры банковского счета, кроме последних четырех. 

// Ваша задача написать функцию, которая принимает в качестве 
// параметра строку, состоящую из цифр, заменяет все элементы на  '#', 
// кроме последних четырех и возвращает ее.

// Например:
// maskify("4556364607935616") --> "############5616"

function maskify (str){
    let finalStr = '';
    for (let i = 0; i < str.length; i++){
       if (i < str.length - 4){
            finalStr += '#';
        } else {
            finalStr += str[i];
        }
        
    }
   return finalStr;
}

console.log(maskify("4556364607935616"));

// #9 решена
// Дан массив слов, необходимо определить, 
// составлены ли все слова из одних и тех же символов.
// Например:
// ["ток", "ток", "кто"] --> true
// ["кот", "тк", "кТо"] --> false

 
function isTrueArr (arr) {
    const firstElem = arr[0].split('').sort().join('');
    for (let elem of arr){
        if (firstElem !== elem.split('').sort().join('')){
            return false;
        }
    }
    return true;
}
console.log(isTrueArr (["кто", "ток", "ктво"]));

// #10 решена
// Напишите функцию, которая возвращает сумму таким образом:

// Например:
// f(1)(2)(3) --> 6

function sum(a) {
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
  }
  
console.log(sum(1)(2)(10));

//#11 
// Напишите функцию, которая находит наиболее часто используемый элемент массива.

// Например:
// const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"

const array=[1, 'z', 'z', 'z', 3, 1, 'z', 1, 'z', 3, 5, 'z', 'z', 'z', 'z', 'z', 1,1,1, ]; 

function getOftenElement (arr) {
    const countObj = arr.reduce((acc, e) =>{
        acc[e] = (acc[e] ?? 0) + 1;
        return acc;
    },{});

    let oftenElement = null;
    let count = 0;
    const key = Object.keys(countObj);
    
    for (let elem of key){
        if (countObj[elem] > count){
            count = countObj[elem];
            oftenElement = elem;
        }
    }
    return oftenElement;
}

console.log(getOftenElement(array));

// 12 htityf
// Напишите функцию `expand(arr)`, которая разворачивает 
// вложенный массив любой глубины.

// Например:
// const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4]; 
// const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];
const arr1 = [1]; 
const arr2 = [1, [2], [3, [[4]]],[5,6]];



function expand(arr){
return arr.reduce((acc,elem) => {
       let result = elem instanceof Array ? expand(elem) : elem;
       return acc.concat(result);
},[]);
}
// console.log(expand(arr1));
// console.log(expand(arr2));
console.log(arr2.flat());






let word = ['banana', 'grape','banana','grape', 'banana', 'orange','banana'];

const mySort = (arr) => {

    const temp = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc;
    },{});  
    console.log(temp);
    const key = Object.keys(temp);
    return key.sort((a, b) => temp[a] - temp[b]);
};
console.log(mySort(word));





