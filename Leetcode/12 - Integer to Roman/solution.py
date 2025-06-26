def intToRoman(self, num: int) -> str:
    roman_numeral_map: List[Tuple[int, str]] = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]

    roman_num: str = ""
    for value, roman_char in roman_numeral_map:
        while num >= value:
            roman_num += roman_char
            num -= value

    return roman_num