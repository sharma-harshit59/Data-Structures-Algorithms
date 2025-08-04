function totalFruit(fruits: number[]): number {
    let low: number = 0;
    let maxFruits: number = 0;
    const fruitCount: Map<number, number> = new Map();

    for (let high = 0; high < fruits.length; high++) {
        const fruit = fruits[high];
        fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);

        while (fruitCount.size > 2) {
            const leftFruit = fruits[low];
            const count = fruitCount.get(leftFruit)! - 1;
            if (count === 0) {
                fruitCount.delete(leftFruit);
            } else {
                fruitCount.set(leftFruit, count);
            }
            low++;
        }
        maxFruits = Math.max(maxFruits, high - low + 1);
    }

    return maxFruits;
};