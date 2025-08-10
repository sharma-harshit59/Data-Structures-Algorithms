bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;

    unordered_map<char, int> charCount;
    for (int i = 0; i < s.size(); i++) {
        charCount[s[i]]++;
        charCount[t[i]]--;
    }

    for (auto& pair: charCount) {
        if (pair.second != 0) {
            return false;
        }
    }
    
    return true;
}