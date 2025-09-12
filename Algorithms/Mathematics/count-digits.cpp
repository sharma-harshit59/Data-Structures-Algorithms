/*
 * Function to count the number of digits in an integer
 */

int countDigits(int n) {
    int count = 0;
    while (n) {
        n /= 10;
        count++;
    }
    return count;
}

// TIME-COMPLEXITY: ⊖(d) - where d is the number of digits in n
// SPACE-COMPLEXITY: O(1) - constant space used