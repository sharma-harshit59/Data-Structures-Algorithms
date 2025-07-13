function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let p: number = 0;
    let t: number = 0;
    let matches: number = 0;

    while (p < players.length && t < trainers.length) {
        if (players[p] <= trainers[t]) {
            matches++;
            p++;
        }
        t++;
    }

    return matches;
};