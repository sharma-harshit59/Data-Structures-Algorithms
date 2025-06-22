def convert(self, s: str, num_rows: int) -> str:
    if num_rows == 1 or len(s) <= num_rows:
        return s

    zigzag: list[str] = ['' for _ in range(num_rows)]
    going_down: bool = True
    row: int = 0

    for char in s:
        zigzag[row] += char
        if row == num_rows - 1:
            going_down = False
        elif row == 0:
            going_down = True
        row += 1 if going_down else -1

    return ''.join(zigzag)