def maximumLength(self, nums: List[int]) -> int:
    odd_count: int = 0
    even_count: int = 0
    alt_count: int = 1
    prev: int = nums[0]

    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            even_count += 1
        else:
            odd_count += 1

        if i > 0 and nums[i] % 2 != prev % 2:
            alt_count += 1
            prev = nums[i]

    return max(odd_count, even_count, alt_count)