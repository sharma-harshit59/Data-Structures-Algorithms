def minimumDeletions(self, word: str, k: int) -> int:
    char_count: List[int] = [0] * 26
    for ch in word:
        index = ord(ch) - ord('a')
        char_count[index] += 1

    frequencies: List[int] = [count for count in char_count if count > 0]
    min_deletions: int = len(word)
    for base_freq in frequencies:
        deletions: int = 0
        for freq in frequencies:
            if freq < base_freq:
                deletions += freq
            elif freq > base_freq + k:
                deletions += freq - (base_freq + k)
        min_deletions = min(min_deletions, deletions)

    return min_deletions