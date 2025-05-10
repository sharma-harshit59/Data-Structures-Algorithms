var maxProduct = function (n) {
    let max1 = 0;
    let max2 = 0;

    while (n > 0) {
        const digit = n % 10;
        if (digit > max1) {
            max2 = max1;
            max1 = digit;
        } else if (digit > max2) {
            max2 = digit;
        }
        n = Math.floor(n / 10);
    }

    return max1 * max2;
};