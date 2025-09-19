class Spreadsheet {
    private grid: number[][];

    constructor(rows: number) {
        this.grid = Array.from({ length: rows }, () => Array(26).fill(0));
    }

    private getCell(cell: string): [number, number] {
        const col = cell.charCodeAt(0) - "A".charCodeAt(0);
        const row = parseInt(cell.slice(1), 10) - 1;
        return [row, col];
    }

    private getCellValue(cell: string): number {
        if (/^[A-Z]/.test(cell)) {
            const [row, col] = this.getCell(cell);
            return this.grid[row][col];
        }
        return parseInt(cell, 10);
    }

    public setCell(cell: string, value: number): void {
        const [row, col] = this.getCell(cell);
        this.grid[row][col] = value;
    }

    public resetCell(cell: string): void {
        const [row, col] = this.getCell(cell);
        this.grid[row][col] = 0;
    }

    public getValue(formula: string): number {
        const expr = formula.slice(1);
        const plusPos = expr.indexOf("+");
        const cell1 = expr.slice(0, plusPos);
        const cell2 = expr.slice(plusPos + 1);
        return this.getCellValue(cell1) + this.getCellValue(cell2);
    }
}