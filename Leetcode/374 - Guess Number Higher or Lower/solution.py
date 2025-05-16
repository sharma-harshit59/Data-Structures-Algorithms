def guessNumber(self, n: int) -> int:
        lowestPick: int = 1
        highestPick: int = n

        while lowestPick <= highestPick:
            guessedPick: int = lowestPick + (highestPick - lowestPick) // 2  # Avoids integer overflow
            guessResult: int = guess(guessedPick)
            if guessResult == 1:
                lowestPick = guessedPick + 1
            elif guessResult == -1:
                highestPick = guessedPick - 1
            else:
                return guessedPick

        return -1  # Should not reach here if input constraints are guaranteed