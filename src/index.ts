export function rollDices(rools: number[][]): number {
    let total = 0;
    for (const roll of rools) {
        let countDiceValue: Record<number, number> = {};

        roll.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, countDiceValue);

        // Carré
        const hasFourOfAKind = Object.values(countDiceValue).some(count => count >= 4);
        if (hasFourOfAKind) {
            total += 35;
            continue;
        }

        // Brelan
        const hasThreeOfAKind = Object.values(countDiceValue).some(count => count >= 3);
        if (hasThreeOfAKind) {
            total += 28;
            continue;
        }

        // Chance
        total += roll.reduce((sum, val) => sum + val, 0);
    }
    return total;
}