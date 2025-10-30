export function rollDices(rools: number[][]): number {
    let total = 0;
    for (const roll of rools) {
        total += roll.reduce((sum, val) => sum + val, 0);
    }
    return total;
}