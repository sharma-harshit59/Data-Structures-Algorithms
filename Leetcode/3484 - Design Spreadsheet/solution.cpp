class Spreadsheet {
private:
    vector<vector<int>> grid;
    pair<int, int> getCell(string cell) {
        int col = cell[0] - 'A';
        int row = stoi(cell.substr(1)) - 1;
        return {row, col};
    }

    int getCellValue(string cell) {
        if (isalpha(cell[0])) {
            auto [row, col] = getCell(cell);
            return grid[row][col];
        } else {
            return stoi(cell);
        }
    }
public:
    Spreadsheet(int rows) {
        grid = vector<vector<int>>(rows, vector<int>(26, 0));
    }
    
    void setCell(string cell, int value) {
        auto [row, col] = getCell(cell);
        grid[row][col] = value;
    }
    
    void resetCell(string cell) {
        auto [row, col] = getCell(cell);
        grid[row][col] = 0;
    }
    
    int getValue(string formula) {
        formula = formula.substr(1);
        size_t plusPos = formula.find('+');
        string cell1 = formula.substr(0, plusPos);
        string cell2 = formula.substr(plusPos + 1);
        return getCellValue(cell1) + getCellValue(cell2);
    }
};