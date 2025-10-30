import { describe, it, expect } from 'vitest';
import { rollDices } from './index';

describe('Yams tests', () => {
    it('should return the total of the dices with this series: ' +
        '[[1, 1, 2, 2, 3, 3], [1, 1, 2, 2, 3, 3]]', () => {
        const rools = [[1, 1, 2, 2, 3, 3], [1, 1, 2, 2, 3, 3]];
        expect(rollDices(rools)).toBe(24);
    });
});