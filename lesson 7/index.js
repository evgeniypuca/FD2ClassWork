//task1

function logNum () {
    for (let i = 1; i <= 50; i++ ){
            console.log(i);
    }
}
logNum()

//task2


function getArr (arr){
    for (let i = 0; i < arr.length; i++ ){
        console.log(arr[i]);
}
}

getArr([1,23,3,54,5,5,5])

//task3

function getSum (arr){
    let summ = 1
    for (let i = 0; i < arr.length; i++ ){
        summ *= arr[1]
}
return summ;
}


function getSum (arr){
return arr.reduce((acc, elem) => acc*elem);
}
getSum([1,5,5])



//task4

function returnArr(arr){
    return arr.filter((elem) => elem %2 === 0 && elem <= 100 && elem >= 0)
}

console.log(returnArr ([1,2,3,4,5,6,7,8,111,22,23,3,100,122]));

//task5

function returIrt(num){
    let i = 0;
    while(num >= 50){
        num /= 2
        i++
    }
    console.log(i);
}


//task5

найдите все года в массив от 0 до ткущего где сумма равно 13


function returnYear(){
    let arr = [];
    for ( let i = 0; i < 2024; i++){
        let str = String(i)
        let newArr = str
        if (newArr.reduce((acc, elem) => {
           acc + elem
        },) === 13){
            arr.push(str)
        }
    }
    return arr;
}
returnYear();


