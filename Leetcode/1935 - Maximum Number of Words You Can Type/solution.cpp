int canBeTypedWords(string text, string brokenLetters) {
    vector<bool> brokenKeys(26, false);
    for (char c: brokenLetters) brokenKeys[c - 'a'] = true;

    int count = 0;
    bool brokenKeyUsed = false;
    for (char c: text) {
        if (c == ' ') {
            if (!brokenKeyUsed) count++;
            brokenKeyUsed = false;
        } else if (brokenKeys[c - 'a']) {
            brokenKeyUsed = true;
        }
    }
    if (!brokenKeyUsed) count++;

    return count;
}