function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0];

    let prefix: string = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let itr: number = 0;
        while (itr < prefix.length && itr < strs[i].length && prefix[itr] === strs[i][itr]) itr++;
        prefix = prefix.slice(0, itr);
        if (prefix === "") break;
    }

    return prefix;
};