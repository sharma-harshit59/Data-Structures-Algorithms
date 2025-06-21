var longestPalindrome = function (s) {
    const getPalindromeLength = (low, high) => {
        while (low >= 0 && high < s.length && s[low] === s[high]) {
            low--;
            high++;
        }
        return [low + 1, high];
    };

    let maxStart = 0, maxEnd = 1;
    for (let i = 0; i < s.length; i++) {
        let [start1, end1] = getPalindromeLength(i, i);
        if (end1 - start1 > maxEnd - maxStart) {
            maxStart = start1;
            maxEnd = end1;
        }
        let [start2, end2] = getPalindromeLength(i, i + 1);
        if (end2 - start2 > maxEnd - maxStart) {
            maxStart = start2;
            maxEnd = end2;
        }
    }

    return s.slice(maxStart, maxEnd);
};