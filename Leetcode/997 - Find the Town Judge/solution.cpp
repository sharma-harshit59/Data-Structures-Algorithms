int findJudge(int n, vector<vector<int>>& trust) {
    vector<int> trusted(n + 1, 0), trusts(n + 1, 0);
    for (const auto& t: trust) {
        trusts[t[0]]++;
        trusted[t[1]]++;
    }
    for (int i = 1; i <= n; i++) {
        if ((trusted[i] == n - 1) && (trusts[i] == 0)) return i;
    }
    return -1;
}