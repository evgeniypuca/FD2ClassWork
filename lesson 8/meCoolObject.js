class MyCoolObject extends MyObject {
    #coolIndex;
    constructor(value,coolIndex) {
        super(value);
        this.#coolIndex = coolIndex
    }
    #bye() {
        console.log(this.#coolIndex);
    }
    hello() {
        console.log(this.value);
        this.#bye();
    }

}
