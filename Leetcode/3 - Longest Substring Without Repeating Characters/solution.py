def lengthOfLongestSubstring(self, s: str) -> int:
    char_count = {}
    left = 0
    right = 0
    max_length = 0

    while right < len(s):
        curr_char = s[right]
        if char_count.get(curr_char, 0) > 0:
            max_length = max(max_length, right - left)
            while char_count.get(curr_char, 0) > 0:
                char_count[s[left]] -= 1
                left += 1
        else:
            char_count[curr_char] = char_count.get(curr_char, 0) + 1
            right += 1

    return max(max_length, right - left)