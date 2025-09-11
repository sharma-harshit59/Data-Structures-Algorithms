bool isVowel(char ch) {
    return (ch == 'a') || (ch == 'e') || (ch == 'i') || (ch == 'o') || (ch == 'u') || (ch == 'A') || (ch == 'E') || (ch == 'I') || (ch == 'O') || (ch == 'U');
}

string sortVowels(string s) {
    vector<char> vowels;
    for (int i = 0; i < s.size(); i++) {
        if (isVowel(s[i])) {
            vowels.push_back(s[i]);
        }
    }

    sort(vowels.begin(), vowels.end());
    for (int i = 0, k = 0; i < s.size(); i++) {
        if (isVowel(s[i])) {
            s[i] = vowels[k++];
        }
    }

    return s;
}