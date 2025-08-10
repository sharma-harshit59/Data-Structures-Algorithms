def isAnagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    char_count: Dict[str, int] = {}

    for i in range(len(s)):
        char_count[s[i]] = char_count.get(s[i], 0) + 1
        char_count[t[i]] = char_count.get(t[i], 0) - 1

    for cnt in char_count.values():
        if cnt != 0:
            return False

    return True