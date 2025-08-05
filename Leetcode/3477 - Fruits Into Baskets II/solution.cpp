int numOfUnplacedFruits(vector<int>& fruits, vector<int>& baskets) {
    int count = 0;
    for (int i = 0; i < fruits.size(); i++) {
        bool placed = false;
        for (int j = 0; j < baskets.size(); j++) {
            if (baskets[j] >= fruits[i]) {
                baskets[j] = 0;
                placed = true;
                break;
            }
        }
        if (!placed) count++;
    }

    return count;
}