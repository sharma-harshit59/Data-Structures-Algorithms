var countNegatives = function (grid) {
    let negNumCount = 0;
    let lastMidIdx = grid[0].length - 1;

    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        let firstIdx = 0;
        let lastIdx = lastMidIdx;

        while (firstIdx <= lastIdx) {
            let midIdx = Math.floor((firstIdx + lastIdx) / 2);

            if (row[midIdx] < 0) {
                if (midIdx === 0 || row[midIdx - 1] >= 0) {
                    let negNumInRow = row.length - midIdx;
                    negNumCount += negNumInRow;
                    lastMidIdx = midIdx;
                    break;
                } else {
                    lastIdx = midIdx - 1;
                }
            } else {
                firstIdx = midIdx + 1;
            }
        }

        if (lastMidIdx === 0) {
            let remainingRows = grid.length - i - 1;
            negNumCount += remainingRows * row.length;
            break;
        }
    }

    return negNumCount;
};