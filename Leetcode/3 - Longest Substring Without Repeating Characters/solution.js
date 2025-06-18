var lengthOfLongestSubstring = function (s) {
    let charCount = {};
    let left = 0, right = 0;
    let maxLength = 0;
    while (right < s.length) {
        const currChar = s[right];
        if (charCount[currChar]) {
            maxLength = Math.max(maxLength, (right - left));
            while (charCount[currChar]) {
                charCount[s[left]]--;
                left++;
            }
        } else {
            charCount[currChar] = (charCount[currChar] || 0) + 1;
            right++;
        }
    }
    return Math.max(maxLength, (right - left));
};