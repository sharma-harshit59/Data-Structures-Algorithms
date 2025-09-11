def sortVowels(self, s: str) -> str:
    def is_vowel(ch: str) -> bool:
        return ch in "aeiouAEIOU"

    vowels: List[str] = [ch for ch in s if is_vowel(ch)]
    vowels.sort()

    result: List[str] = list(s)
    k = 0
    for i, ch in enumerate(result):
        if is_vowel(ch):
            result[i] = vowels[k]
            k += 1

    return "".join(result)