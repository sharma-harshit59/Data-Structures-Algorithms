vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
    int n = grid.size();

    for (int x = 1; x < n; x++) {
        vector<int> elements;
        int i = 0, j = x;
        while (i < n && j < n) {
            elements.push_back(grid[i][j]);
            i++; j++;
        }
        sort(elements.begin(), elements.end());
        i = 0; j = x;
        int k = 0;
        while (i < n && j < n) {
            grid[i][j] = elements[k++];
            i++; j++;
        }
    }

    for (int x = 0; x < n; x++) {
        vector<int> elements;
        int i = x, j = 0;
        while (i < n && j < n) {
            elements.push_back(grid[i][j]);
            i++; j++;
        }
        sort(elements.begin(), elements.end(), greater<int>());
        i = x; j = 0;
        int k = 0;
        while (i < n && j < n) {
            grid[i][j] = elements[k++];
            i++; j++;
        }
    }

    return grid;
}