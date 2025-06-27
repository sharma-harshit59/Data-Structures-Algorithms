function romanToInt(s: string): number {
    const romanNumMap: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let num: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        const curr: number = romanNumMap[s[i]];
        const next: number | undefined = romanNumMap[s[i + 1]];

        if (next !== undefined && curr < next) {
            num += (next - curr);
            i++;
        } else {
            num += curr;
        }
    }

    return num;
};