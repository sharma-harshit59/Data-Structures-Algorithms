def maxDiff(self, num: int) -> int:
    num_str: str = str(num)

    def get_max_num(num_str: str) -> int:
        digit_to_replace: str = ''
        replacement_digit: str = '9'

        for ch in num_str:
            if ch != '9':
                digit_to_replace = ch
                break

        if digit_to_replace == '':
            return int(num_str)

        new_str: str = ''.join(
            replacement_digit if ch == digit_to_replace else ch
            for ch in num_str
        )
        return int(new_str)

    def get_min_num(num_str: str) -> int:
        digit_to_replace: str = ''
        replacement_digit: str = ''

        if num_str[0] != '1':
            digit_to_replace = num_str[0]
            replacement_digit = '1'
        else:
            for ch in num_str[1:]:
                if ch != '0' and ch != num_str[0]:
                    digit_to_replace = ch
                    replacement_digit = '0'
                    break

        if digit_to_replace == '':
            return int(num_str)

        new_str: str = ''.join(
            replacement_digit if ch == digit_to_replace else ch
            for ch in num_str
        )
        return int(new_str)

    return get_max_num(num_str) - get_min_num(num_str)