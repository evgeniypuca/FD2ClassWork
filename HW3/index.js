const columns = ['name', 'count', 'price'];
const data = [
    { name: 'Хлеб', count: 22, price: 14.99 },
    { name: 'Молоко', count: 3, price: 3.2 },
    { name: 'Сыр', count: 1, price: 10 },
    { name: 'Вода', count: 2, price: 5.5 },
];



function countMaxLengthValue(arr, id) {
    let counter = 0;
    arr.forEach((elem) => {
            if (elem[id].toString().length > counter) {
            counter = elem[id].toString().length;
        }
    }); 
    return counter;
}


function createTextTable(columns, data) {
    let resultTextTable = '';
    data.forEach((numLine, i) => {
       columns.forEach((id, index) => {
            resultTextTable += '│';
            let space = '';
            let requiredSpace = countMaxLengthValue(data, columns[index]) - numLine[id].toString().length; //считаем сколько нужно пробелов
            for (let j = 0; j < requiredSpace; j++) {
                space += " ";
            }
            if (typeof numLine[id] === 'string') {                 //проверка куда вставить пробелы - до или после 
                resultTextTable += ` ${numLine[id]} ${space}`;
            } else {
                resultTextTable += `${space} ${numLine[id]} `;
            }
            if (columns.length - index === 1) {    //Последний символ в строке
                resultTextTable += '│';
            }
        });
       
        if (data.length - i === 1) {
            resultTextTable += '\n└────────┴────┴───────┘\n';
        } else {
            resultTextTable += '\n├────────┼────┼───────┤\n';
        }
    });
    return resultTextTable;
}

const textTable = createTextTable(columns, data);
console.log(textTable);


// // -----------------------------------------------------------┆



function createTextTable(columnIds, data) {
    // Создаем строку с заголовками колонок на основе массива columnIds
    const headerRow = columnIds.join(" | ");

    // Создаем разделительную строку, чтобы отделить заголовки от данных
    const separatorRow = "-|".repeat(columnIds.length);

    // Создаем строки с данными на основе массива объектов data
    const dataRows = data.map(item => {
        const rowValues = columnIds.map(col => String(item[col] || ""));
        return rowValues.join(" | ");
    });

    // Собираем все строки в таблицу
    const table = [headerRow, separatorRow, ...dataRows].join("\n");

    return table;
}

// Пример использования функции
const columnIds = ["ID", "Name", "Age"];
const data = [
    { ID: 1, Name: "Alice", Age: 25 },
    { ID: 2, Name: "Bob", Age: 30 },
    { ID: 3, Name: "Charlie", Age: 35 },
];

const table = createTextTable(columnIds, data);
console.log(table);

function createTextTable(columns, data) {
    let resultTextTable = '┌────────┬────┬───────┐\n';
    data.forEach((numLine, i) => {
        columns.forEach((id, index) => {           // формирую строку
            resultTextTable += '│';
            let space = '';
            let diffspace = countMaxLengthValue(data, columns[index]) - numLine[id].toString().length;
            for (let j = 0; j < diffspace; j++) {
                space += " ";
            }
            if (typeof numLine[id] === 'string') {                 //проверка куда вставить пробелы - до или после 
                resultTextTable += ` ${numLine[id]} ${space}`;
            } else {
                resultTextTable += `${space} ${numLine[id]} `;
            }
            if (columns.length - index === 1) {    //Последний символ в строке
                resultTextTable += '│';
            }
        });
        console.log(i);
        
        if (data.length - i === 1) {
            resultTextTable += '\n└────────┴────┴───────┘\n';
        } else {
            resultTextTable += '\n├────────┼────┼───────┤\n';
        }
    });
    return resultTextTable;
}