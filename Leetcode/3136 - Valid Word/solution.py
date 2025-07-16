def isValid(self, word: str) -> bool:
    if len(word) < 3:
        return False

    vowels: Set[str] = {"a", "e", "i", "o", "u"}
    has_vowel = False
    has_consonant = False

    for ch in word:
        if ch.isalpha():
            ch_lower = ch.lower()
            if ch_lower in vowels:
                has_vowel = True
            else:
                has_consonant = True
        elif not ch.isdigit():
            return False

    return has_vowel and has_consonant