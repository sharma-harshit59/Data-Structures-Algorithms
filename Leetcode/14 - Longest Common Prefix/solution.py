def get_prefix(a: str, b: str) -> str:
    length = min(len(a), len(b))
    i = 0
    while i < length and a[i] == b[i]:
        i += 1
    return a[:i]

def longestCommonPrefix(strs: List[str]) -> str:
    prefix = strs[0]
    for i in range(1, len(strs)):
        prefix = get_prefix(prefix, strs[i])
        if not prefix:
            break
    return prefix