var canBeTypedWords = function(text, brokenLetters) {
    const brokenKeys = Array(26).fill(false);
    for (const c of brokenLetters) {
        brokenKeys[c.charCodeAt(0) - 97] = true;
    }

    let count = 0;
    let brokenKeyUsed = false;
    for (const c of text) {
        if (c === ' ') {
            if (!brokenKeyUsed) count++;
            brokenKeyUsed = false;
        } else if (brokenKeys[c.charCodeAt(0) - 97]) {
            brokenKeyUsed = true;
        }
    }
    if (!brokenKeyUsed) count++;

    return count;
};