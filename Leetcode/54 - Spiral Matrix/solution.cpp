vector<int> spiralOrder(vector<vector<int>> &matrix)
{
    int m = matrix.size();
    int n = matrix[0].size();
    int top = 0, bottom = m - 1;
    int left = 0, right = n - 1;
    vector<int> res;
    while ((top <= bottom) && (left <= right))
    {
        for (int j = left; j <= right; j++)
        {
            res.push_back(matrix[top][j]);
        }
        top++;
        for (int i = top; i <= bottom; i++)
        {
            res.push_back(matrix[i][right]);
        }
        right--;
        if (top <= bottom)
        {
            for (int j = right; j >= left; j--)
            {
                res.push_back(matrix[bottom][j]);
            }
        }
        bottom--;
        if (left <= right)
        {
            for (int i = bottom; i >= top; i--)
            {
                res.push_back(matrix[i][left]);
            }
        }
        left++;
    }
    return res;
}