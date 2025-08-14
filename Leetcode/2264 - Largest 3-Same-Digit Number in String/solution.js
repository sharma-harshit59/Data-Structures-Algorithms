var largestGoodInteger = function(num) {
    let res = "";
    for (let i = 2; i < num.length; i++) {
        if (num[i - 2] === num[i - 1] && num[i - 1] === num[i]) {
            const tempStr = num[i].repeat(3);
            if (tempStr > res) res = tempStr;
        }
    }
    return res;
};