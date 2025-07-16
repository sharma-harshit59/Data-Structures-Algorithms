var isValid = function (word) {
    if (word.length < 3) return false;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let hasVowel = false, hasConsonant = false;

    for (let ch of word) {
        if (/[a-zA-Z]/.test(ch)) {
            const lower = ch.toLowerCase();
            if (vowels.has(lower)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        } else if (!/\d/.test(ch)) {
            return false;
        }
    }

    return hasVowel && hasConsonant;
};