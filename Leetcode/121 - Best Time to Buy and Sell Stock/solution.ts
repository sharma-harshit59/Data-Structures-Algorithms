function maxProfit(prices: number[]): number {
    let buyPrice: number = prices[0];
    let profit: number = 0;

    for (const price of prices) {
        if (price < buyPrice) {
            buyPrice = price;
        } else {
            profit = Math.max(profit, price - buyPrice);
        }
    }

    return profit;
};