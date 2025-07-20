int maxProfit(vector<int>& prices) {
    int buy_price = prices[0], profit = 0;
    for (auto& price: prices) {
        if (price < buy_price) {
            buy_price = price;
        } else {
            profit = max(profit, price - buy_price);
        }
    }
    return profit;
}