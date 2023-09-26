const MAX_AGE = 150;
const MIN_AGE = 1;

let lastName;
let secondName;
let firstName;
let age;

// do {
//     const userInput = prompt("Введите возраст", );
//     age = userInput ? Number(userInput) : NaN ;
// } while ( !isFinite(age) || age > MAX_AGE || isNaN(age) );

do {
    let userInput prompt("Введите возраст", );
    do {

    }
    age = userInput ? Number(userInput) : NaN ;
} while ( !isFinite(age) || age > MAX_AGE || isNaN(age) );




// do {
//     lastName = prompt("Введите фамилию", "Иванов") ;
// } while (!lastName);


// do {
//     firstName = prompt("Введите имя", "Иван") ;
// } while (!firstName);


// do {
//     secondName = prompt("Введите Отчество", "Иванович") ;
// } while (!secondName);


// const fio  = (`Ваше ФИО: ${firstName} ${lastName} ${secondName}, ваш возраст ${age}`);

alert(age);



// -------------------------------------------------------------------------------------------------

// function fio(lastName, secondName, firstName){
//     do {
//         lastName = prompt("Введите фамилию", "Иванов") ;
//     } while (!lastName);
//     do {
//         firstName = prompt("Введите имя", "Иван") ;
//     } while (!firstName);
        
//     do {
//         secondName = prompt("Введите Отчество", "Иванович") ;
//     } while (!secondName);

//     return console.log(`${lastName}, ${secondName}, ${firstName}`);
// }