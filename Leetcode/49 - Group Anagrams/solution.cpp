vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> anagrams;
    for (string& str: strs) {
        string s = str;
        sort(s.begin(), s.end());
        anagrams[s].push_back(str);
    }

    vector<vector<string>> group;
    for (auto& pair: anagrams) {
        group.push_back(pair.second);
    }

    return group;
}