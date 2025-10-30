import { describe, it, expect } from 'vitest';
import { rollDices } from './index';

describe('Yams tests', () => {
    it.each([
        { rools: [[1, 1, 2, 2, 3, 3], [1, 1, 2, 2, 3, 3]], expected: 24 },
        { rools: [[2, 2, 3, 3, 4, 4], [2, 2, 3, 3, 4, 4]], expected: 36 },
    ])('should return $expected for rools: $rools', ({ rools, expected }) => {
        expect(rollDices(rools)).toBe(expected);
    });
});