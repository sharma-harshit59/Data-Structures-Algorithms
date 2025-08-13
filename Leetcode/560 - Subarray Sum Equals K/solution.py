def subarraySum(self, nums: List[int], k: int) -> int:
    prefix_sum: Dict[int, int] = {0: 1}
    sum_: int = 0
    count: int = 0

    for num in nums:
        sum_ += num
        if (sum_ - k) in prefix_sum:
            count += prefix_sum[sum_ - k]
        prefix_sum[sum_] = prefix_sum.get(sum_, 0) + 1

    return count