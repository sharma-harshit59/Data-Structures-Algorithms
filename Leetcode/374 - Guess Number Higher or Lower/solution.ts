function guessNumber(n: number): number {
    let lowestPick: number = 1;
    let highestPick: number = n;

    while (lowestPick <= highestPick) {
        const guessedPick: number = lowestPick + Math.floor((highestPick - lowestPick) / 2); // Avoids Integer Overflow
        const guessResult: number = guess(guessedPick);
        if (guessResult === 1) {
            lowestPick = guessedPick + 1;
        } else if (guessResult === -1) {
            highestPick = guessedPick - 1;
        } else {
            return guessedPick;
        }
    }
    return -1; // Should not reach here if input constraints are guaranteed
}