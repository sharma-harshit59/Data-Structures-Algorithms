var romanToInt = function (s) {
    const romanNumMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = romanNumMap[s[i]];
        const next = romanNumMap[s[i + 1]];
        if (next && curr < next) {
            num += (next - curr);
            i++;
        } else {
            num += curr;
        }
    }
    return num;
};