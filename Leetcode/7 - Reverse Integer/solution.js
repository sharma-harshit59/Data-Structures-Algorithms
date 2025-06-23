var reverse = function (x) {
    let rev = 0;
    let num = Math.abs(x);
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.trunc(num / 10);  // faster than Math.floor for positive integers
    }
    if (x < 0) rev = -rev;

    return ((-(2 ** 31) <= rev) && (rev < 2 ** 31)) ? rev : 0;
};