string makeFancyString(string s) {
    string res = s.substr(0, 2);
    for (int i = 2; i < s.size(); i++) {
        if (!(s[i] == res[res.size() - 2] && s[i] == res[res.size() - 1])) {
            res += s[i];
        }
    }
    return res;
}