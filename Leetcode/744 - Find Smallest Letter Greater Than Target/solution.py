class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        firstIdx: int = 0
        lastIdx: int = len(letters) - 1

        while (firstIdx <= lastIdx):
            MIDIDX: int = (firstIdx + lastIdx) // 2

            if (letters[MIDIDX] <= target):
                firstIdx = MIDIDX + 1
            else:
                lastIdx = MIDIDX - 1

        # If left goes past the array, wrap around
        return letters[firstIdx % len(letters)]
        