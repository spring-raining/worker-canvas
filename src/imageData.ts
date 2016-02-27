'use strict';

export default class ImageData {
    
    data: Uint8ClampedArray;
    width: number;
    height: number;
    
    constructor(array: Uint8ClampedArray, width: number, height: number);
    constructor(width: number, height: number);
    constructor(arg1: any, arg2: number, arg3?: number) {
        if (arg1 instanceof Uint8ClampedArray) {
            this.width = arg2;
            this.height = arg3;
        } else {
            this.width = arg1;
            this.height = arg2;
        }
        
        // [r, g, b, a, r, g, b, a, ... ]
        this.data = new Uint8ClampedArray(this.width * this.height * 4);
        if (arg1 instanceof Uint8ClampedArray) {
            this.data.set(arg1, 0);
        }
    }
}
