def longestPalindrome(self, s: str) -> str:
    def get_palindrome_bounds(low: int, high: int) -> Tuple[int, int]:
        while low >= 0 and high < len(s) and s[low] == s[high]:
            low -= 1
            high += 1
        return low + 1, high

    max_start: int = 0
    max_end: int = 1

    for i in range(len(s)):
        start1, end1 = get_palindrome_bounds(i, i)         # odd-length center
        if end1 - start1 > max_end - max_start:
            max_start, max_end = start1, end1

        start2, end2 = get_palindrome_bounds(i, i + 1)     # even-length center
        if end2 - start2 > max_end - max_start:
            max_start, max_end = start2, end2

    return s[max_start:max_end]