def findLHS(self, nums: List[int]) -> int:
    nums_count: dict[int, int] = {}
    for num in nums:
        if num in nums_count:
            nums_count[num] += 1
        else:
            nums_count[num] = 1

    longest_seq: int = 0
    for num in nums_count:
        if num + 1 in nums_count:
            curr_seq_length = nums_count[num] + nums_count[num + 1]
            longest_seq = max(longest_seq, curr_seq_length)

    return longest_seq