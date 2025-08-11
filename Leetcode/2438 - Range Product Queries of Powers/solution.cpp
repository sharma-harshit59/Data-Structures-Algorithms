vector<int> productQueries(int n, vector<vector<int>>& queries) {
    const int MOD = 1e9 + 7;
    vector<int> powers;

    for (int p = 1; p <= n; p <<= 1) {
        if ((n & p) != 0) {
            powers.push_back(p);
        }
    }

    vector<int> answers;
    for (auto &q : queries) {
        int left = q[0], right = q[1];
        long long product = 1;
        for (int i = left; i <= right; i++) {
            product = (product * powers[i]) % MOD;
        }
        answers.push_back((int)product);
    }

    return answers;
}