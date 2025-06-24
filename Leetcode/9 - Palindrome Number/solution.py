def isPalindrome(self, x: int) -> bool:
    if x < 0 or ((x % 10 == 0) and (x != 0)):
        return False
    reverse: int = 0
    while (x > reverse):
        reverse = (reverse * 10) + (x % 10)
        x //= 10
    return (x == reverse) or (x == reverse // 10)