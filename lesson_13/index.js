
// function replaceLongColors(text){
//     return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3\b/gi, (_, r, g, b) => {
//         return `#${r}${g}${b}`
//     });
// }

// console.log(replaceLongColors('#aA55aa'));


function replaceLongColors(text){
    return text.replace(/_[a-z]/gi, (math,) => math.charAt(1).toUpperCase())
    
}

console.log(replaceLongColors('dfdsf_dsdf_dfsdf'));

