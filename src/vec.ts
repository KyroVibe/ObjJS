export class SharedVec3 {

    private array: Array<Number>;
    private offset: number;

    constructor(array: Array<Number>, offset: number) {
        this.array = array;
        this.offset = offset;
    }

    get x(): Number {
        return this.array[this.offset];
    }

    get y(): Number {
        return this.array[this.offset + 1];
    }

    get z(): Number {
        return this.array[this.offset + 2];
    }

    set x(val: Number) {
        this.array[this.offset] = val;
    }

    set y(val: Number) {
        this.array[this.offset + 1] = val;
    }

    set z(val: Number) {
        this.array[this.offset + 2] = val;
    }
}

export class SharedVec2 {

    private array: Array<Number>;
    private offset: number;

    constructor(array: Array<Number>, offset: number) {
        this.array = array;
        this.offset = offset;
    }

    get x(): Number {
        return this.array[this.offset];
    }

    get y(): Number {
        return this.array[this.offset + 1];
    }

    set x(val: Number) {
        this.array[this.offset] = val;
    }

    set y(val: Number) {
        this.array[this.offset + 1] = val;
    }
}