def matchPlayersAndTrainers(self, players: List[int], trainers: List[int]) -> int:
    players.sort()
    trainers.sort()

    p: int = 0
    t: int = 0
    matches: int = 0

    while p < len(players) and t < len(trainers):
        if players[p] <= trainers[t]:
            matches += 1
            p += 1
        t += 1

    return matches