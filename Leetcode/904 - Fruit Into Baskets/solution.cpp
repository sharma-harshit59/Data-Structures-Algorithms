int totalFruit(vector<int>& fruits) {
    int low = 0, high = 0;
    int maxFruits = 0;
    unordered_map<int, int> fruitCount;
    while (high < fruits.size()) {
        fruitCount[fruits[high]]++;
        while (fruitCount.size() > 2) {
            fruitCount[fruits[low]]--;
            if (fruitCount[fruits[low]] == 0) fruitCount.erase(fruits[low]);
            low++;
        }
        maxFruits = max(maxFruits, high - low + 1);
        high++;
    }
    return maxFruits;
}