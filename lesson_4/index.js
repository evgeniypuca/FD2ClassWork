"use strict";

const MAX_AGE = 150;
const MIN_AGE = 0;
const RETIRED_MALE = 65;
const RETIRED_FIMALE = 60;
const SEX_MALE  = 'М';
const SEX_FIMALE  = 'Ж';

const lastName = getUserInput('Ваша фамилия', keepWithoutChange,isNotEmptyString);
const name = getUserInput('Ваше имя', keepWithoutChange, isNotEmptyString);
const fathername = getUserInput('Ваше отчество', keepWithoutChange, isNotEmptyString);
const age = getUserInput('Ваш возраст',transformToNumber, isValidAge );
const gender = getUserInput('Вы мужчина или женщина? Введите М или Ж', transformToGender, isValidGender );
const retiredAge = sex 
let retired;

alert(
    `ФИО: ${lastName} ${name} ${fathername}
Возраст: ${age}
Пол: ${gender}
На пенсии: ${retired}`
);



function keepWithoutChange (data) {
    return data;
}

function isNotEmptyString (value){
    return  Boolean(value)
}

function replaceSymbols(inputString, targetSymbol, replaceSymbol){
    let resultString = '';
    for (const char of inputString) {
        resultString += char === targetSymbol ? replaceSymbol : char;

    }
    return resultString;
}

function transformToNumber(data) {
    
    if(!data){
        return NaN;
    }
    return Number(replaceSymbols(data, ",", "."));
}

function isValidAge(inputAge) {
    return Number.isFinite(inputAge) && inputAge >= MIN_AGE && inputAge <= MAX_AGE;
}

function getUserInput(message, transformData, isValid) {
    let userInput = null;
    let isCancelled = false;

    do {
        const rawUserInput = prompt(message);

        isCancelled = rawUserInput === null;
        userInput = isCancelled ? null : transformData(rawUserInput);
    } while (isCancelled || !isValid(userInput));
    return userInput;
}
 
function transformToGender (inputGender) {
    // return inputGender.toUpperCase()

    switch (inputGender){
        case "м":
        case "М":
        return SEX_MALE
        case "ж":
        case "Ж":
        return SEX_MALE
        default:
            return "";

    }

}

function isValidGender  (someGender){
        return someGender === SEX_MALE || someGender === SEX_FIMALE
}

if (gender === 'М') {
    if (age < RETIRED_MALE) {
        retired = 'нет';
    }
    else {
        retired = 'да';
    }
}
else if (age < RETIRED_FIMALE) {
    retired = 'нет';
}
else {
    retired = 'да';
};



