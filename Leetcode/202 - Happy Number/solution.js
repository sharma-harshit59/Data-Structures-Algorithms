var isHappy = function (n) {
    const getDigitSquareSum = (num) => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    const numSet = new Set();
    while (!numSet.has(n)) {
        numSet.add(n);
        n = getDigitSquareSum(n);
        if (n === 1) return true;
    }

    return false;
};