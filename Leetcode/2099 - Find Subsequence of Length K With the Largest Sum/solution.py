def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
    indexed_nums: List[Tuple[int, int]] = [(num, idx) for idx, num in enumerate(nums)]
    indexed_nums.sort(key=lambda x: -x[0])  # Sort by value descending
    top_k: List[Tuple[int, int]] = indexed_nums[:k]
    top_k.sort(key=lambda x: x[1])  # Sort by original index
    return [num for num, _ in top_k]