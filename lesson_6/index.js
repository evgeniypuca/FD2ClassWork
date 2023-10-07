// const string1 = 'Hello';
// const string2 = 'Welcome';
// const duplicatedSymbols = findDuplicates(string1, string2);

// function findDuplicates(str1, str2) {
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     let result = "";

//     const [base, secondary] = str1.length < str.length ? [str1, str2] : [str2, str1]
//     if (typeof base === 'string' && typeof base === 'string') {
//         for (let i = 0; i < str1.length; i++) {
//             if (str2.includes(str1[i]) && !result.includes(str1[i])) {
//                 result += str1[i];
//             }
//         }
//         return result;
//     }
//     return result;
// }

// console.log(duplicatedSymbols);


// function countNumString(str) {
//     // const a1 = str.split(""); хуже деструктуризации
//     // const a2 = [...str];
//     return[...str].reduce((stat, symbol) => {
//         stat[symbol] = (stat[symbol] ?? 0) +1;
//         return stat; 
//     }, {});

// }
// countNumString("dddffffds");

function returnArrNum(...num) {
    return num.filter((elem) => elem % 2 === 0)
}
