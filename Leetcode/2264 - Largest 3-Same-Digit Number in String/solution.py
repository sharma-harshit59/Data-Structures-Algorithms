def largestGoodInteger(num: str) -> str:
    res: str = ""
    for i in range(2, len(num)):
        if num[i - 2] == num[i - 1] == num[i]:
            tempStr: str = num[i] * 3
            if tempStr > res:
                res = tempStr
    return res