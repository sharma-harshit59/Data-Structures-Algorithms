var isPalindrome = function (x) {
    if (x < 0 || ((x % 10 === 0) && (x !== 0))) return false;
    let reverse = 0;
    while (x > reverse) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.trunc(x / 10);
    }
    return x === reverse || x === Math.trunc(reverse / 10);
};