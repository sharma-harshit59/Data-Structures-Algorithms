function lengthAfterTransformations(s: string, t: number): number {
    const MOD: number = 10 ** 9 + 7;
    const charCount: number[] = new Array<number>(26).fill(0);

    // Count initial character frequencies
    for (let i: number = 0; i < s.length; i++) {
        const index: number = s.charCodeAt(i) - 97; // ASCII of 'a' is 97
        charCount[index]++;
    }

    // Perform t transformations
    for (let i: number = 0; i < t; i++) {
        const temp: number = charCount[25];
        for (let j: number = 25; j > 0; j--) {
            charCount[j] = charCount[j - 1];
        }
        charCount[0] = temp;
        charCount[1] = (charCount[1] + temp) % MOD;
    }

    // Calculate total length modulo MOD
    const totalLength: number = charCount.reduce((sum: number, count: number) => (sum + count % MOD) % MOD, 0);

    return totalLength;
}