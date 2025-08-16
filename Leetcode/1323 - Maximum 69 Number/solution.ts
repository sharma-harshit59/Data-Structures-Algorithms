function maximum69Number (num: number): number {
    let tempNum: number = num;
    let mul: number = 0;
    let currMul: number = 1;

    while (tempNum > 0) {
        if (tempNum % 10 === 6) {
            mul = currMul;
        }
        tempNum = Math.floor(tempNum / 10);
        currMul *= 10;
    }

    return num + (3 * mul);
};