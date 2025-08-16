var maximum69Number  = function(num) {
    let tempNum = num;
    let mul = 0;
    let currMul = 1;

    while (tempNum > 0) {
        if (tempNum % 10 === 6) {
            mul = currMul;
        }
        tempNum = Math.floor(tempNum / 10);
        currMul *= 10;
    }

    return num + (3 * mul);
};