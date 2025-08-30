var areaOfMaxDiagonal = function(dimensions) {
    let resDiag = -1, resArea = -1;

    for (const d of dimensions) {
        const len = d[0], wid = d[1];
        const currDiag = len * len + wid * wid;
        const currArea = len * wid;

        if (currDiag > resDiag || (currDiag === resDiag && currArea > resArea)) {
            resDiag = currDiag;
            resArea = currArea;
        }
    }

    return resArea;
};