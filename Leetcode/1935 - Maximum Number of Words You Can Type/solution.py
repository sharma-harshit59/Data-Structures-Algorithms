def canBeTypedWords(text: str, brokenLetters: str) -> int:
    broken_keys: List[bool] = [False] * 26
    for c in brokenLetters:
        broken_keys[ord(c) - ord('a')] = True

    count: int = 0
    broken_key_used: bool = False
    for c in text:
        if c == ' ':
            if not broken_key_used:
                count += 1
            broken_key_used = False
        elif broken_keys[ord(c) - ord('a')]:
            broken_key_used = True
    if not broken_key_used:
        count += 1

    return count