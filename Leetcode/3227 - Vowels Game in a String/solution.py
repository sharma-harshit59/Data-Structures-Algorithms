def doesAliceWin(s: str) -> bool:
    for c in s:
        if c in ("a", "e", "i", "o", "u"):
            return True
    return False