from typing import List

class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        negNumCount: int = 0
        lastMidIdx: int = len(grid[0]) - 1

        for i in range(len(grid)):
            row: List[int] = grid[i]
            firstIdx: int = 0
            lastIdx: int = lastMidIdx

            while firstIdx <= lastIdx:
                midIdx: int = (firstIdx + lastIdx) // 2

                if row[midIdx] < 0:
                    if midIdx == 0 or row[midIdx - 1] >= 0:
                        negNumInRow: int = len(row) - midIdx
                        negNumCount += negNumInRow
                        lastMidIdx = midIdx
                        break
                    else:
                        lastIdx = midIdx - 1
                else:
                    firstIdx = midIdx + 1

            if lastMidIdx == 0:
                remainingRows: int = len(grid) - i - 1
                negNumCount += remainingRows * len(row)
                break

        return negNumCount
