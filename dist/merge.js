"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = collection_3.length - 1;
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        const val1 = i < collection_1.length ? collection_1[i] : Infinity;
        const val2 = j < collection_2.length ? collection_2[j] : Infinity;
        const val3 = k >= 0 ? collection_3[k] : Infinity;
        if (val1 <= val2 && val1 <= val3) {
            result.push(val1);
            i++;
        }
        else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            j++;
        }
        else {
            result.push(val3);
            k--;
        }
    }
    return result;
}
