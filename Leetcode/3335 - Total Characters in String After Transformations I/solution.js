var lengthAfterTransformations = function (s, t) {
    const MOD = 10 ** 9 + 7;
    const charCount = new Array(26).fill(0);

    // Count initial character frequencies
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97; // ASCII of 'a' is 97
        charCount[index]++;
    }

    // Perform t transformations
    for (let i = 0; i < t; i++) {
        const temp = charCount[25];
        for (let j = 25; j > 0; j--) {
            charCount[j] = charCount[j - 1];
        }
        charCount[0] = temp;
        charCount[1] = (charCount[1] + temp) % MOD;
    }

    // Calculate total length modulo MOD
    const totalLength = charCount.reduce((sum, count) => (sum + count % MOD) % MOD, 0);
    return totalLength;
};