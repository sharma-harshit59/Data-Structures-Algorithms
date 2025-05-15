def getLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
    alt_seq_0: List[str] = []
    alt_seq_1: List[str] = []
    expect_0: int = 0
    expect_1: int = 1

    for i in range(len(groups)):
        if groups[i] == expect_0:
            alt_seq_0.append(words[i])
            expect_0 = 1 - expect_0
        if groups[i] == expect_1:
            alt_seq_1.append(words[i])
            expect_1 = 1 - expect_1

    return alt_seq_0 if len(alt_seq_0) >= len(alt_seq_1) else alt_seq_1