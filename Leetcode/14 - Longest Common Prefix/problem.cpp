string getPrefix(string a, string b) {
    int len = min(a.size(), b.size());
    int i = 0;
    while (i < len && a[i] == b[i]) i++;
    return a.substr(0, i);
}

string longestCommonPrefix(vector<string>& strs) {
    string prefix = strs[0];
    for (int i = 1; prefix.size() > 0 && i < strs.size(); i++) {
        prefix = getPrefix(prefix, strs[i]);
    }
    return prefix;
}