import { merge } from '../src/merge';

describe('merge function', () => {
    test('should merge three arrays of equal length correctly', () => {
        const c1 = [1, 4, 7];
        const c2 = [2, 5, 8];
        const c3 = [9, 6, 3]; // Max to Min
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle arrays of different lengths', () => {
        const c1 = [1, 10];
        const c2 = [2, 5, 8, 12];
        const c3 = [11, 4, 0];
        const expected = [0, 1, 2, 4, 5, 8, 10, 11, 12];
        
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle empty arrays', () => {
        const c1: number[] = [];
        const c2 = [1, 2];
        const c3 = [3, 0];
        const expected = [0, 1, 2, 3];
        
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle duplicate values across arrays', () => {
        const c1 = [1, 5, 5];
        const c2 = [5, 10];
        const c3 = [15, 5, 2];
        const expected = [1, 2, 5, 5, 5, 5, 10, 15];
        
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should work with negative numbers', () => {
        const c1 = [-10, -5, 0];
        const c2 = [-7, 2];
        const c3 = [5, 1, -1];
        const expected = [-10, -7, -5, -1, 0, 1, 2, 5];
        
        expect(merge(c1, c2, c3)).toEqual(expected);
    });
});