int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
    int resDiag = -1, resArea = -1;

    for (const auto& d : dimensions) {
        int len = d[0], wid = d[1];
        int currDiag = len * len + wid * wid;
        int currArea = len * wid;

        if (currDiag > resDiag || (currDiag == resDiag && currArea > resArea)) {
            resDiag = currDiag;
            resArea = currArea;
        }
    }

    return resArea;
}