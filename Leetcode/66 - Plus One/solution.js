var plusOne = function (digits) {
    let i = digits.length - 1;
    let carry = 1;

    while (i >= 0 && carry) {
        digits[i] += carry;
        carry = Math.floor(digits[i] / 10);
        digits[i] %= 10;
        i--;
    }

    if (carry) {
        digits.unshift(1);
    }

    return digits;
};