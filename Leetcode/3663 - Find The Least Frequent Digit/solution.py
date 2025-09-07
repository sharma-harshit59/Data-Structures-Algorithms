def getLeastFrequentDigit(n: int) -> int:
    digFreq = [0] * 10
    temp = n
    while temp > 0:
        digFreq[temp % 10] += 1
        temp //= 10

    leastFreqNum = -1
    for i in range(10):
        if digFreq[i] == 0:
            continue
        if leastFreqNum == -1 or digFreq[i] < digFreq[leastFreqNum]:
            leastFreqNum = i
    return leastFreqNum