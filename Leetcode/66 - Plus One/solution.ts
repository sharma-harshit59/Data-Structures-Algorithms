function plusOne(digits: number[]): number[] {
    let i: number = digits.length - 1;
    let carry: number = 1;

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