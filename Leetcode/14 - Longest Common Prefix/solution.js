var getPrefix = function(a, b) {
    let len = Math.min(a.length, b.length);
    let i = 0;
    while (i < len && a[i] === b[i]) {
        i++;
    }
    return a.substring(0, i);
}

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 1; prefix.length > 0 && i < strs.length; i++) {
        prefix = getPrefix(prefix, strs[i]);
    }
    return prefix;
};