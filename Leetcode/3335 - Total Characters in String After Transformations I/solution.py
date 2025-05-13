class Solution:
    def lengthAfterTransformations(self, s: str, t: int) -> int:
        MOD = 10**9 + 7
        char_count = [0] * 26

        for char in s:
            char_count[ord(char) - ord('a')] += 1

        for _ in range(t):
            temp = char_count[25]
            # Shift right from index 24 down to 0
            for i in range(25, 0, -1):
                char_count[i] = char_count[i - 1]
            char_count[0] = temp
            char_count[1] = (char_count[1] + temp) % MOD  # Apply mod here to keep values in range

        # Compute total sum under modulo
        return sum(count % MOD for count in char_count) % MOD
