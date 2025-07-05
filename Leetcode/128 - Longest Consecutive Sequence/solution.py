def longestConsecutive(self, nums: List[int]) -> int:
    num_set: set[int] = set(nums)
    max_len: int = 0

    for num in num_set:
        if num - 1 not in num_set:
            curr_num: int = num
            curr_len: int = 1

            while curr_num + 1 in num_set:
                curr_num += 1
                curr_len += 1

            max_len = max(max_len, curr_len)

    return max_len