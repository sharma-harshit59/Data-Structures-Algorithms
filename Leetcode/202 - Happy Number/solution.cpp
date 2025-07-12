int getDigSqSum(int num)
{
    int res = 0;
    while (num)
    {
        int dig = num % 10;
        res += (dig * dig);
        num /= 10;
    }
    return res;
}

bool isHappy(int n)
{
    unordered_set<int> numSet;
    while (numSet.find(n) == numSet.end())
    {
        numSet.insert(n);
        n = getDigSqSum(n);
        if (n == 1)
            return true;
    }
    return false;
}