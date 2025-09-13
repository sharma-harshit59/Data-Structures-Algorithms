def maxFreqSum(self, s: str) -> int:
    def is_vowel(c: str) -> bool:
        return c in "aeiou"
        
    char_freq: List[int] = [0] * 26
    max_vowel_freq = 0
    max_consonant_freq = 0

    for c in s:
        idx = ord(c) - ord('a')
        char_freq[idx] += 1
        freq = char_freq[idx]
        if is_vowel(c):
            max_vowel_freq = max(max_vowel_freq, freq)
        else:
            max_consonant_freq = max(max_consonant_freq, freq)

    return max_vowel_freq + max_consonant_freq