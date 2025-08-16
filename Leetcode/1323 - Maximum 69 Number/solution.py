def maximum69Number (self, num: int) -> int:
    tempNum = num
    mul = 0
    currMul = 1

    while tempNum > 0:
        if tempNum % 10 == 6:
            mul = currMul
        tempNum //= 10
        currMul *= 10

    return num + (3 * mul)