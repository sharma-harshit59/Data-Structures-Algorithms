int matchPlayersAndTrainers(vector<int> &players, vector<int> &trainers)
{
    sort(players.begin(), players.end());
    sort(trainers.begin(), trainers.end());
    int pItr = 0, tItr = 0;
    int matches = 0;
    while (pItr < players.size() && tItr < trainers.size())
    {
        if (players[pItr] <= trainers[tItr])
        {
            matches++;
            pItr++;
        }
        tItr++;
    }
    return matches;
}