def romanToInt(self, s: str) -> int:
    roman_num_map: Dict[str, int] = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    num: int = 0
    i: int = 0

    while i < len(s):
        curr = roman_num_map[s[i]]
        next_val = roman_num_map[s[i + 1]] if i + 1 < len(s) else 0

        if curr < next_val:
            num += next_val - curr
            i += 2
        else:
            num += curr
            i += 1

    return num