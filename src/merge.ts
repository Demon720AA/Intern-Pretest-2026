/**
 * Merges three sorted arrays into one ascending sorted array.
 * * @param collection_1 Sorted from min to max
 * @param collection_2 Sorted from min to max
 * @param collection_3 Sorted from max to min
 * @returns A single merged array sorted by ascending
 * * Complexity: O(N) where N is the total number of elements in all three collections.
 */
export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const result: number[] = [];
    
    let i = 0; // Pointer for collection_1 (ascending)
    let j = 0; // Pointer for collection_2 (ascending)
    let k = collection_3.length - 1; // Pointer for collection_3 (starts from end to get min)

    // Continue until all elements from all collections are processed
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        
        // Get current values, or Infinity if the collection is exhausted
        const val1 = i < collection_1.length ? collection_1[i] : Infinity;
        const val2 = j < collection_2.length ? collection_2[j] : Infinity;
        const val3 = k >= 0 ? collection_3[k] : Infinity;

        // Find the minimum among the three current candidates
        if (val1 <= val2 && val1 <= val3) {
            result.push(val1);
            i++;
        } else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            j++;
        } else {
            result.push(val3);
            k--;
        }
    }

    return result;
}