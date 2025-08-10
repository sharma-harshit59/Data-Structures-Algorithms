bool reorderedPowerOf2(int n) {
    string strNum = to_string(n);
    sort(strNum.begin(), strNum.end());

    for (int i = 1; i < 1e9; i <<= 1) {
        string stri = to_string(i);
        sort(stri.begin(), stri.end());
        if (stri == strNum) return true;
    }

    return false;
}