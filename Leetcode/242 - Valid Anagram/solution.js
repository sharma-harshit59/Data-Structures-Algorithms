var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] ?? 0) + 1;
    }

    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
};