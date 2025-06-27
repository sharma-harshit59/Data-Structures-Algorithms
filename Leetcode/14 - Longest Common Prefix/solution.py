def longestCommonPrefix(self, strs: List[str]) -> str:
    if len(strs) == 1:
        return strs[0]

    prefix: str = strs[0]
    for i in range(1, len(strs)):
        j: int = 0
        while j < len(prefix) and j < len(strs[i]) and prefix[j] == strs[i][j]:
            j += 1
        prefix = prefix[:j]
        if not prefix:
            break

    return prefix