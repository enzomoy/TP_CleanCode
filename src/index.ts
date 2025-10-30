export function rollDices(rools: number[][]): number {
    let total = 0;
    for (const roll of rools) {
        let countDiceValue: Record<number, number> = {};

        roll.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, countDiceValue);

        // Yams
        const hasFiveOfAKind = Object.values(countDiceValue).some(count => count >= 5);
        if (hasFiveOfAKind) {
            total += 50;
            continue;
        }

        // Grande suite
        const uniqueValues = Object.keys(countDiceValue).map(Number).sort((a, b) => a - b);
        const isLargeStraight = (uniqueValues.length === 5) && (uniqueValues[4] - uniqueValues[0] === 4);
        if (isLargeStraight) {
            total += 40;
            continue;
        }

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