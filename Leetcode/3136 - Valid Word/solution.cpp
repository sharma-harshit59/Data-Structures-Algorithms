bool isValid(string word)
{
    if (word.size() < 3)
        return false;

    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
    bool hasVowel = false, hasConsonant = false;

    for (char ch : word)
    {
        if (isalpha(ch))
        {
            ch = tolower(ch);
            if (vowels.count(ch))
            {
                hasVowel = true;
            }
            else
            {
                hasConsonant = true;
            }
        }
        else if (!isdigit(ch))
        {
            return false;
        }
    }

    return hasVowel && hasConsonant;
}