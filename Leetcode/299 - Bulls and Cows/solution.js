var getHint = function (secret, guess) {
    let bulls = 0;
    const secretMap = {}, guessMap = {};

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secretMap[secret[i]] = (secretMap[secret[i]] ?? 0) + 1;
            guessMap[guess[i]] = (guessMap[guess[i]] ?? 0) + 1;
        }
    }

    let cows = 0;
    for (const ch in secretMap) {
        if (guessMap[ch]) {
            cows += Math.min(secretMap[ch], guessMap[ch]);
        }
    }

    return `${bulls}A${cows}B`;
};