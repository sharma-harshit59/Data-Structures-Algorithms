function intToRoman(num: number): string {
    const romanNumeralMap: [number, string][] = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let romanNum: string = "";
    for (const [value, romanChar] of romanNumeralMap) {
        while (num >= value) {
            romanNum += romanChar;
            num -= value;
        }
    }

    return romanNum;
};