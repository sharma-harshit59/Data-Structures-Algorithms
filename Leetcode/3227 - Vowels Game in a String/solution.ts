function doesAliceWin(s: string): boolean {
    for (const c of s) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            return true;
        }
    }
    return false;
};