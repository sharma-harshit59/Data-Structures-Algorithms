function lengthOfLongestSubstring(s: string): number {
    const charCount: { [key: string]: number } = {};
    let left: number = 0;
    let right: number = 0;
    let maxLength: number = 0;

    while (right < s.length) {
        const currChar: string = s[right];
        if (charCount[currChar]) {
            maxLength = Math.max(maxLength, right - left);
            while (charCount[currChar]) {
                charCount[s[left]]--;
                left++;
            }
        } else {
            charCount[currChar] = (charCount[currChar] || 0) + 1;
            right++;
        }
    }

    return Math.max(maxLength, right - left);
};