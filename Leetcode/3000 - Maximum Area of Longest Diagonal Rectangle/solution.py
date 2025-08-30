def areaOfMaxDiagonal(dimensions: List[List[int]]) -> int:
    resDiag, resArea = -1, -1

    for d in dimensions:
        len_, wid = d[0], d[1]
        currDiag = len_ * len_ + wid * wid
        currArea = len_ * wid

        if currDiag > resDiag or (currDiag == resDiag and currArea > resArea):
            resDiag = currDiag
            resArea = currArea

    return resArea