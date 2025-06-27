var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
        if (!prefix) break;
    }
    return prefix;
};