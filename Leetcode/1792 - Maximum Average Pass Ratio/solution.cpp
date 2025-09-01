static bool comp(const pair<int,int>& a, const pair<int,int>& b) {
    double gainA = ((double)(a.first + 1) / (a.second + 1)) - ((double)a.first / a.second);
    double gainB = ((double)(b.first + 1) / (b.second + 1)) - ((double)b.first / b.second);
    return gainA < gainB;
}

double maxAverageRatio(vector<vector<int>>& classes, int extraStudents) {
    priority_queue<pair<int,int>, vector<pair<int,int>>, decltype(&comp)> classPR(comp);

    for (auto& c : classes) {
        classPR.push({c[0], c[1]});
    }

    while (extraStudents--) {
        auto [pass, total] = classPR.top();
        classPR.pop();
        classPR.push({pass + 1, total + 1});
    }

    double result = 0;
    while (!classPR.empty()) {
        auto [pass, total] = classPR.top();
        classPR.pop();
        result += (double)pass / total;
    }

    return result / classes.size();
}