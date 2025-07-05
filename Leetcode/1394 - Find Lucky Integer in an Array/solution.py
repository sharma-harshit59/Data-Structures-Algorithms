def findLucky(self, arr: List[int]) -> int:
    numsCount: dict[int, int] = {}

    for num in arr:
        numsCount[num] = numsCount.get(num, 0) + 1

    res: int = -1

    for num in numsCount:
        if num == numsCount[num] and num > res:
            res = num

    return res