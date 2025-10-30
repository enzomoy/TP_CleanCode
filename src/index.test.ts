import { describe, it, expect } from 'vitest';
import { rollDices } from './index';

describe('Yams tests', () => {
    it.each([
        { rools: [[1, 1, 2, 2, 3], [1, 1, 2, 2, 3]], expected: 18 }, // Chance
        { rools: [[2, 2, 3, 3, 4], [2, 2, 3, 3, 4]], expected: 28 }, // Chance
        { rools: [[1, 1, 1, 2, 3], [1, 1, 1, 2, 3]], expected: 56 }, // Brelan of 1 + Chance
        { rools: [[2, 2, 2, 3, 4], [2, 1, 1, 2, 3]], expected: 37 }, // Brelan of 2 + Chance
        { rools: [[3, 3, 3, 1, 2], [2, 1, 1, 2, 4]], expected: 38 }, // Brelan of 3 + Chance
        { rools: [[4, 4, 4, 1, 2], [2, 1, 1, 2, 5]], expected: 39 }, // Brelan of 4 + Chance
        { rools: [[6, 6, 6, 1, 2], [2, 1, 1, 2, 6]], expected: 40 }, // Brelan of 6 + Chance
        { rools: [[6, 6, 6, 6, 2], [4, 1, 4, 4, 2]], expected: 63 }, // Carré of 6 + Brelan of 4
        { rools: [[1, 1, 1, 1, 1], [4, 1, 4, 4, 2]], expected: 78}, // Yams of 1 + Brelan of 4
        { rools: [[1, 2, 3, 4, 5], [4, 1, 4, 4, 2]], expected: 68}, // Grande suite de 5 + Brelan of 4
        { rools: [[1, 2, 3, 4, 5], [4, 4, 4, 4, 4]], expected: 90}, // Grande suite de 6 + Yams of 4
        { rools: [[4, 4, 4, 2, 2], [4, 4, 4, 4, 4]], expected: 80}, // Full of 4 and 2 + Yams of 4

        { rools: [[4, 4, 4, 4, 4], [4, 4, 4, 4, 4]], expected: 85}, // Full of 4 and 2 + Unavailable Yams -> Carré of 4

    ])('should return $expected for rools: $rools', ({ rools, expected }) => {
        expect(rollDices(rools)).toBe(expected);
    });
});