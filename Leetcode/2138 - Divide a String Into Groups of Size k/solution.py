def divideString(self, s: str, k: int, fill: str) -> List[str]:
    result: List[str] = []
    curr_str: str = ""

    for char in s:
        curr_str += char
        if len(curr_str) == k:
            result.append(curr_str)
            curr_str = ""

    if curr_str:
        while len(curr_str) < k:
            curr_str += fill
        result.append(curr_str)

    return result