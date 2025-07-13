vector<int> plusOne(vector<int> &digits)
{
    int i = digits.size() - 1, carry = 1;
    do
    {
        digits[i] += carry;
        carry = digits[i] / 10;
        digits[i] %= 10;
        i--;
    } while (i >= 0 && carry);
    if (carry)
    {
        digits.insert(digits.begin(), 1);
    }
    return digits;
}