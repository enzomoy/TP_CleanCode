export function rollDices(rools: number[][]): number {
    let total = 0;
    for (const roll of rools) {

        const countOne = roll.filter(val => val === 1).length;

        if (countOne >= 3) {
            total += 28;
            continue;
        }

        total += roll.reduce((sum, val) => sum + val, 0);
    }
    return total;
}