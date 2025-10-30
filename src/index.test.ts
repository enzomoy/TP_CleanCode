import { describe, it, expect } from 'vitest';
import { rollDices } from './index';

describe('Yams tests', () => {
    it.each([
        { rools: [[1, 1, 2, 2, 3], [1, 1, 2, 2, 3]], expected: 18 }, // Chance
        { rools: [[2, 2, 3, 3, 4], [2, 2, 3, 3, 4]], expected: 28 }, // Chance
        { rools: [[1, 1, 1, 2, 3], [1, 1, 1, 2, 3]], expected: 56 }, // Brelan of 1
        { rools: [[2, 2, 2, 3, 4], [2, 1, 1, 2, 3]], expected: 37 }, // Brelan of 2
        { rools: [[3, 3, 3, 1, 2], [2, 1, 1, 2, 4]], expected: 38 }, // Brelan of 3
        { rools: [[4, 4, 4, 1, 2], [2, 1, 1, 2, 5]], expected: 39 }, // Brelan of 4
        { rools: [[6, 6, 6, 1, 2], [2, 1, 1, 2, 6]], expected: 40 }, // Brelan of 6
    ])('should return $expected for rools: $rools', ({ rools, expected }) => {
        expect(rollDices(rools)).toBe(expected);
    });
});