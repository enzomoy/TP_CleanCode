export function rollDices(rools: number[][]): number {
    let total = 0;
    for (const roll of rools) {
        let countDiceValue: Record<number, number> = countOccurrences(roll);

        // Yams
        if (hasNOfAKind(countDiceValue, 5)) {
            total += 50;
            continue;
        }

        // Grande suite
        const uniqueValues = getUniqueValues(countDiceValue);
        const isLargeStraight = (uniqueValues.length === 5) && (uniqueValues[4] - uniqueValues[0] === 4);
        if (isLargeStraight) {
            total += 40;
            continue;
        }

        // Full
        const hasThree = hasNOfAKind(countDiceValue, 3);
        const hasTwo = hasNOfAKind(countDiceValue, 2);
        if (hasThree && hasTwo) {
            total += 30;
            continue;
        }

        // Carré
        if (hasNOfAKind(countDiceValue, 4)) {
            total += 35;
            continue;
        }

        // Brelan
        if (hasThree) {
            total += 28;
            continue;
        }

        // Chance
        total += sumArray(roll);
    }
    return total;
}

function countOccurrences(arr: number[]): Record<number, number> {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);
}

function sumArray(arr: number[]): number {
    return arr.reduce((sum, val) => sum + val, 0);
}

function hasNOfAKind(counts: Record<number, number>, n: number): boolean {
    return Object.values(counts).some(count => count == n);
}

function getUniqueValues(counts: Record<number, number>): number[] {
    return Object.keys(counts).map(Number);
}
