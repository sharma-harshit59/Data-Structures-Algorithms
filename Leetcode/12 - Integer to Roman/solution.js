var intToRoman = function (num) {
    let romanNumeralMap = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let romanNum = "";
    for (const [value, romanChar] of romanNumeralMap) {
        while (num >= value) {
            romanNum += romanChar;
            num -= value;
        }
    }
    return romanNum;
};