function countNegatives(grid: number[][]): number {
    let negNumCount: number = 0;
    let lastMidIdx: number = grid[0].length - 1;

    for (let i: number = 0; i < grid.length; i++) {
        let row: number[] = grid[i];
        let firstIdx: number = 0;
        let lastIdx: number = lastMidIdx;

        while (firstIdx <= lastIdx) {
            let midIdx: number = Math.floor((firstIdx + lastIdx) / 2);

            if (row[midIdx] < 0) {
                // Check if this is the first negative in the row
                if (midIdx === 0 || row[midIdx - 1] >= 0) {
                    let negNumInRow: number = row.length - midIdx;
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

        // Optimization: If first negative is at index 0, all next rows are fully negative
        if (lastMidIdx === 0) {
            let remainingRows: number = grid.length - i - 1;
            negNumCount += (remainingRows * row.length);
            break;
        }
    }
    return negNumCount;
}