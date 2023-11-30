
// function replaceLongColors(text){
//     return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3\b/gi, (_, r, g, b) => {
//         return `#${r}${g}${b}`
//     });
// }

// console.log(replaceLongColors('#aA55aa'));


function t(text, data){
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return Object.hasOwn(data, key) ? String(data[key]) : match;
    })
}

console.log(t ('dfs{{hghgh}} df{{aaa}} dgdfgb d  g {{hghgh}}', {hghgh: 5, aaa: 7, }));
