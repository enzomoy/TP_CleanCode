export function rollDices(rools: number[][]): number {
    let total = 0;
    for (const roll of rools) {

        // const countOne = roll.filter(val => val === 1).length;
        // const countTwo = roll.filter(val => val === 2).length;
        //
        // if (countOne >= 3 || countTwo >= 3) {
        //     total += 28;
        //     continue;
        // }

        let countDiceValue: Record<number, number> = {};

        roll.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, countDiceValue);

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