function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charCount: Record<string, number> = {};

    for (const char of s) {
        charCount[char] = (charCount[char] ?? 0) + 1;
    }

    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
};