def countBits(self, n: int) -> List[int]:
    set_bit_count: List[int] = [0] * (n + 1)
    exp: int = 1

    for i in range(1, n + 1):
        if i == exp:
            set_bit_count[i] = 1
            exp *= 2
        else:
            half_exp = exp >> 1
            set_bit_count[i] = set_bit_count[half_exp] + set_bit_count[i - half_exp]

    return set_bit_count