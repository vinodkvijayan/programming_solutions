/**
 * https://leetcode.com/problems/permutations/
 */
function swap(arr, i, j) {

  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

}

function permutation(arr, l, r, combinations) {

  if (l === r) {
      combinations.push(new Array(...arr));
  } else {

      for (let i = l; i <= r; ++i) {

          swap(arr, l, i);
          permutation(arr, l + 1, r, combinations);
          swap(arr, l, i);

      }

  }

}

var permute = function(arr) {

  if (arr.length === 1) return [arr];

  const n = arr.length;
  const combinations = [];

  permutation(arr, 0, n - 1, combinations);
  return combinations;

}