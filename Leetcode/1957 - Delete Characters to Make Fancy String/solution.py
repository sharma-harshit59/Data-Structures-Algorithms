def makeFancyString(self, s: str) -> str:
    res = s[:2]
    for i in range(2, len(s)):
        if not (s[i] == res[-1] and s[i] == res[-2]):
            res += s[i]
    return res