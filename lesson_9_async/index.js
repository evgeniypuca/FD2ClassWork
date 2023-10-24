// const id = setTimeout(() => {
//     console.log('5');
// }, 5000)

// setTimeout(() => {
//     clearTimeout(id);
//     console.log('clearT');
//     setTimeout(() => {
//         console.log('claerI');
//         clearInterval(idInt)
//     }, 3000);
// }, 3000);

// let s = 0;

// const idInt = setInterval(() => { 
//     console.log(++s);
// }, 1000);

// // const bigInt = 56354651n; 
// // const value =0b0101010110; // двоичное
// // const num = 0x12512A125d5;  //шеснадцатиричное  

// // console.log(Number.MAX_SAFE_INTEGER);


const cancelTask = sheduleTask(() => {
    console.log('task');
},);

function sheduleTask(task) {
   const id = setTimeout(() => task(), 300)
    return () => {
        clearTimeout(id)
    }
}
cancelTask()


queueMicrotask(() => {

});

const id = requestIdleCallback(() => {

}); // запросит у барузера момент простоя, когда ничего не будет выполнятся, можно отменить, не все браузеры поддерживают

cancelIdleCallback(id); 

const idFrame = requestAnimationFrame(() => { // полезная

}) //создаёт макрозадачу, в тот моент когда браузер будет готов перерисовывать задачу. Те выполнить перед отрисовкой следующего кадра

cancelAnimationFrame(idFrame); // для отмены


const stop = renderCycle(() =>{

});

function renderCycle(callback) {
    const idRef = {id : 0};
    const render = () => {
        idRef.id = requestAnimationFrame(() => {
        callback();
        render()
    });
    };

    render();

    return () => {
        cancelAnimationFrame(idRef.id);
};
}

let v = 0;
renderCycle(() => console.log(++v))


