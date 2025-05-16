var guessNumber = function (n) {
    let lowestPick = 1;
    let highestPick = n;

    while (lowestPick <= highestPick) {
        const guessedPick = lowestPick + Math.floor((highestPick - lowestPick) / 2); // Avoids Integer Overflow
        const guessResult = guess(guessedPick);
        if (guessResult === 1) {
            lowestPick = guessedPick + 1;
        } else if (guessResult === -1) {
            highestPick = guessedPick - 1;
        } else {
            return guessedPick;
        }
    }
    return -1; // Should not reach here if input constraints are guaranteed
};