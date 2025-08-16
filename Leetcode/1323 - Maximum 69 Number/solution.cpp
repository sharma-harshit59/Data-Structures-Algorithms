int maximum69Number (int num) {
    int tempNum = num, mul = 0, currMul = 1;
    while (tempNum) {
        if (tempNum % 10 == 6) {
            mul = currMul;
        }
        currMul *= 10;
        tempNum /= 10;
    }
    return num + (3 * mul);
}