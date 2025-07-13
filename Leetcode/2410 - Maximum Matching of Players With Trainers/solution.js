var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let p = 0, t = 0;
    let matches = 0;

    while (p < players.length && t < trainers.length) {
        if (players[p] <= trainers[t]) {
            matches++;
            p++;
        }
        t++;
    }

    return matches;
};