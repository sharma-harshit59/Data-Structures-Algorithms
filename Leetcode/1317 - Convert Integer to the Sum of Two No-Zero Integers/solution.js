var isNoZero = function(num) {
    while (num > 0) {
        if (num % 10 === 0) return false;
        num = Math.floor(num / 10);
    }
    return true;
}

var getNoZeroIntegers = function(n) {
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (isNoZero(i) && isNoZero(n - i)) {
            return [i, n - i];
        }
    }
    return [];
};