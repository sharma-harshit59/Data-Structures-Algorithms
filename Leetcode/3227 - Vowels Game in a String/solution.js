var doesAliceWin = function(s) {
    for (const c of s) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            return true;
        }
    }
    return false;
};