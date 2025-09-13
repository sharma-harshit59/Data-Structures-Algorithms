var maxFreqSum = function(s) {
    const isVowel = (c) => {
        return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
    };

    const charFreq = new Array(26).fill(0);
    let maxVowelFreq = 0;
    let maxConsonantFreq = 0;

    for (const c of s) {
        const idx = c.charCodeAt(0) - 97;
        const freq = ++charFreq[idx];
        if (isVowel(c)) {
            maxVowelFreq = Math.max(maxVowelFreq, freq);
        } else {
            maxConsonantFreq = Math.max(maxConsonantFreq, freq);
        }
    }
    return maxVowelFreq + maxConsonantFreq;
};