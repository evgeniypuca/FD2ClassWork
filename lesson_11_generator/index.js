function* getValues (symbols, repeatCount) {
    for (const symbol of symbols){
        yield* repeatTimes(symbol,repeatCount)
    }
}

function* repeatTimes(value,repeatCount){
    for (let i = 1; i <= repeatCount; i++) {
        yield value;
        
    }
}

const iterableObject = {
    values : [1,2,3,],
    *[Symbol.iterator](){
        yield* this.values.values();
    }
}


for (const value of iterableObject){
    console.log(value);
}


const _disable = new WeakMap();


class Test {
    
constructor() {
    _disable.get(this,false)
} 


get disable(){
    _disable.get(this)
}

disable(){
    _disables.set
}

    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
              return 5
            default:
                return 'five'
        }
    }

}

const t = new Test();


for (const symbol of getValues(['a','b'], 5)){
    console.log(symbol);
}

console.log(...getValues(['a','b'], 5));

console.log(new Set(getValues(['a','b'], 5)));
