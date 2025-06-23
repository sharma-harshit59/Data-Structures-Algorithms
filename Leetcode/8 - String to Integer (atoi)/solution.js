var myAtoi = function (s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    let i = 0;
    const n = s.length;
    let sign = 1;

    while (i < n && s[i] === ' ') i++; // Skip leading whitespace
    if (s[i] === '+' || s[i] === '-') { // Check for optional sign
        if (s[i] === '-') sign = -1;
        i++;
    }

    let num = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        if (sign * num <= INT_MIN) return INT_MIN;
        if (sign * num >= INT_MAX) return INT_MAX;
        i++;
    }

    return sign * num;
};