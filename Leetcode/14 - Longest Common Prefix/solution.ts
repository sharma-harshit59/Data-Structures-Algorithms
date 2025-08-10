function getPrefix(a: string, b: string): string {
    let len = Math.min(a.length, b.length);
    let i = 0;
    while (i < len && a[i] === b[i]) {
        i++;
    }
    return a.substring(0, i);
}

function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for (let i = 1; prefix.length > 0 && i < strs.length; i++) {
        prefix = getPrefix(prefix, strs[i]);
    }
    return prefix;
};