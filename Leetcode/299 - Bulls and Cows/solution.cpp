string getHint(string secret, string guess)
{
    int bulls = 0;
    unordered_map<char, int> secretMap, guessMap;
    for (int i = 0; i < secret.size(); i++)
    {
        if (secret[i] == guess[i])
        {
            bulls++;
        }
        else
        {
            secretMap[secret[i]]++;
            guessMap[guess[i]]++;
        }
    }

    int cows = 0;
    for (auto [key, val] : secretMap)
    {
        cows += min(val, guessMap[key]);
    }
    return to_string(bulls) + "A" + to_string(cows) + "B";
}