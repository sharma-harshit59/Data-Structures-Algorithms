var Spreadsheet = function(rows) {
    this.grid = Array.from({ length: rows }, () => Array(26).fill(0));
};

Spreadsheet.prototype.getCell = function(cell) {
    const col = cell.charCodeAt(0) - 'A'.charCodeAt(0);
    const row = parseInt(cell.slice(1), 10) - 1;
    return [row, col];
};

Spreadsheet.prototype.getCellValue = function(cell) {
    if (/^[A-Z]/.test(cell)) {
        const [row, col] = this.getCell(cell);
        return this.grid[row][col];
    }
    return parseInt(cell, 10);
};

Spreadsheet.prototype.setCell = function(cell, value) {
    const [row, col] = this.getCell(cell);
    this.grid[row][col] = value;
};

Spreadsheet.prototype.resetCell = function(cell) {
    const [row, col] = this.getCell(cell);
    this.grid[row][col] = 0;
};

Spreadsheet.prototype.getValue = function(formula) {
    const expr = formula.slice(1);
    const plusPos = expr.indexOf('+');
    const cell1 = expr.slice(0, plusPos);
    const cell2 = expr.slice(plusPos + 1);
    return this.getCellValue(cell1) + this.getCellValue(cell2);
};