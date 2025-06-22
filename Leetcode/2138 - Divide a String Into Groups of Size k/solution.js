var divideString = function (s, k, fill) {
    let result = [];
    let currStr = "";
    for (let i = 0; i < s.length; i++) {
        currStr += s[i];
        if (currStr.length === k) {
            result.push(currStr);
            currStr = "";
        }
    }
    if (currStr.length) {
        while (currStr.length !== k) {
            currStr += fill;
        }
        result.push(currStr);
    }
    return result;
};