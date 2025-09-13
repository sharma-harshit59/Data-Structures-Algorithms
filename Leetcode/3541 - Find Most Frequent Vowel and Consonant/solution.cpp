bool isVowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int maxFreqSum(string s) {
    vector<int> charFreq(26, 0);
    int maxVowelFreq = 0, maxConsonantFreq = 0;

    for (char c: s) {
        charFreq[c - 'a']++;
        if (isVowel(c)) {
            maxVowelFreq = max(maxVowelFreq, charFreq[c - 'a']);
        } else {
            maxConsonantFreq = max(maxConsonantFreq, charFreq[c - 'a']);
        }
    }

    return maxVowelFreq + maxConsonantFreq;
}