def myAtoi(self, s: str) -> int:
    INT_MIN: int = -2**31
    INT_MAX: int = 2**31 - 1

    i: int = 0
    n: int = len(s)
    sign: int = 1

    while i < n and s[i] == ' ':
        i += 1
    if i < n and s[i] in ('+', '-'):
        if s[i] == '-':
            sign = -1
        i += 1

    num: int = 0
    while i < n and s[i].isdigit():
        num = num * 10 + int(s[i])
        if sign * num <= INT_MIN:
            return INT_MIN
        if sign * num >= INT_MAX:
            return INT_MAX
        i += 1

    return sign * num