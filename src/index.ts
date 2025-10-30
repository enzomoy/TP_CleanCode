enum Figure {
    YAMS = 'YAMS',
    GRANDE_SUITE = 'GRANDE_SUITE',
    FULL = 'FULL',
    CARRE = 'CARRE',
    BRELAN = 'BRELAN',
    CHANCE = 'CHANCE',
}

interface FigureAvailability {
    figure: Figure;
    available: boolean;
}

export function rollDices(rools: number[][]): number {
    let total = 0;
    let figuresAvailability: FigureAvailability[] = Object.values(Figure).map(figure => ({ figure, available: true }));

    for (const roll of rools) {
        let countDiceValue: Record<number, number> = countOccurrences(roll);

        // Yams
        if (hasNOfAKind(countDiceValue, 5) && isFigureAvailable(figuresAvailability, Figure.YAMS)) {
            markFigureAsUsed(figuresAvailability, Figure.YAMS);
            total += 50;
            continue;
        }

        // Grande suite
        const uniqueValues = getUniqueValues(countDiceValue);
        const isLargeStraight = (uniqueValues.length === 5) && (uniqueValues[4] - uniqueValues[0] === 4);
        if (isLargeStraight && isFigureAvailable(figuresAvailability, Figure.GRANDE_SUITE)) {
            markFigureAsUsed(figuresAvailability, Figure.GRANDE_SUITE);
            total += 40;
            continue;
        }

        // Full
        const hasThree = hasNOfAKind(countDiceValue, 3);
        const hasTwo = hasNOfAKind(countDiceValue, 2);
        if (hasThree && hasTwo && isFigureAvailable(figuresAvailability, Figure.FULL)) {
            markFigureAsUsed(figuresAvailability, Figure.FULL);
            total += 30;
            continue;
        }

        // Carré
        if (hasNOfAKind(countDiceValue, 4) && isFigureAvailable(figuresAvailability, Figure.CARRE)) {
            markFigureAsUsed(figuresAvailability, Figure.CARRE);
            total += 35;
            continue;
        }

        // Brelan
        if (hasNOfAKind(countDiceValue, 3) && isFigureAvailable(figuresAvailability, Figure.BRELAN)) {
            markFigureAsUsed(figuresAvailability, Figure.BRELAN);
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

function isFigureAvailable(figuresAvailability: FigureAvailability[], figure: Figure): boolean {
    const figureStatus = figuresAvailability.find(f => f.figure === figure);
    return figureStatus ? figureStatus.available : false;
}

function markFigureAsUsed(figuresAvailability: FigureAvailability[], figure: Figure): void {
    const figureStatus = figuresAvailability.find(f => f.figure === figure);
    if (figureStatus) {
        figureStatus.available = false;
    }
}
