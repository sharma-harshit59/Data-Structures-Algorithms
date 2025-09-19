class Spreadsheet:

    def __init__(self, rows: int):
        self.grid: List[List[int]] = [[0] * 26 for _ in range(rows)]
    
    def _get_cell(self, cell: str) -> Tuple[int, int]:
        col = ord(cell[0]) - ord('A')
        row = int(cell[1:]) - 1
        return row, col

    def _get_cell_value(self, cell: str) -> int:
        if cell[0].isalpha():
            row, col = self._get_cell(cell)
            return self.grid[row][col]
        return int(cell)

    def setCell(self, cell: str, value: int) -> None:
        row, col = self._get_cell(cell)
        self.grid[row][col] = value

    def resetCell(self, cell: str) -> None:
        row, col = self._get_cell(cell)
        self.grid[row][col] = 0

    def getValue(self, formula: str) -> int:
        expr = formula[1:]
        plus_pos = expr.index('+')
        cell1 = expr[:plus_pos]
        cell2 = expr[plus_pos + 1:]
        return self._get_cell_value(cell1) + self._get_cell_value(cell2)