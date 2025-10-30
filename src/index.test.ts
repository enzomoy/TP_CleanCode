import { describe, it, expect } from 'vitest';
import { rollDices } from './index';

describe('Yams tests', () => {
    it.each([
        { rools: [[1, 1, 2, 2, 3], [1, 1, 2, 2, 3]], expected: 18 }, // Chance
        { rools: [[2, 2, 3, 3, 4], [2, 2, 3, 3, 4]], expected: 28 }, // Chance
        { rools: [[1, 1, 1, 2, 3], [1, 1, 1, 2, 3]], expected: 56 }, // Brelan
    ])('should return $expected for rools: $rools', ({ rools, expected }) => {
        expect(rollDices(rools)).toBe(expected);
    });
});