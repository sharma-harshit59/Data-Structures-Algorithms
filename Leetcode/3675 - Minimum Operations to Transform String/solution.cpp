int minOperations(string s) {
    int maxDiff = 26;
    for (char ch: s) {
        if (ch == 'a') continue;
        int currDiff = (ch - 'a');
        maxDiff = min(currDiff, maxDiff);
    }
    return 26 - maxDiff;
}