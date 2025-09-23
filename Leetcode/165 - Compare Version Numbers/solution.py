def compareVersion(version1: str, version2: str) -> int:
    v1: List[int] = [int(x) for x in version1.split('.')]
    v2: List[int] = [int(x) for x in version2.split('.')]

    length: int = max(len(v1), len(v2))
    for i in range(length):
        num1: int = v1[i] if i < len(v1) else 0
        num2: int = v2[i] if i < len(v2) else 0
        if num1 != num2:
            return 1 if num1 > num2 else -1
    return 0