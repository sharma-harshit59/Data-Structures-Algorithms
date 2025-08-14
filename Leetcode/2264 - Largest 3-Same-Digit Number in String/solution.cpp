string largestGoodInteger(string num) {
    string res = "";
    for (int i = 2; i < num.size(); i++) {
        if (num[i-2] == num[i-1] && num[i-1] == num[i]) {
            string tempStr(3, num[i]);
            if (tempStr > res) res = tempStr;
        }
    }
    return res;
}