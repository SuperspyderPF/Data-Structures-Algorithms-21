/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    ///put arr in set 
    var ar = new Set(arr)
    ///create count array 
    var arr1 = Array.from({length: 10000}, (_, i) => i + 1)
    ///filter the array from count array
    const difference = arr1.filter( x => !ar.has(x) );
    //return solution 
    return difference[k - 1 ]
};