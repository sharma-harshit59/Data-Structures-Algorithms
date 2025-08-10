def reorderedPowerOf2(self, n: int) -> bool:
    strNum: str = ''.join(sorted(str(n)))

    i: int = 1
    while i <= 1e9:
        stri: str = ''.join(sorted(str(i)))
        if stri == strNum:
            return True
        i <<= 1
    return False