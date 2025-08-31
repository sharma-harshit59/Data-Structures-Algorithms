vector<int> recoverOrder(vector<int>& order, vector<int>& friends) {
    unordered_set<int> friendIds(friends.begin(), friends.end());
    vector<int> res;

    for (int id: order) {
        if (friendIds.find(id) != friendIds.end()) {
            res.push_back(id);
        }
    }
    
    return res;
}