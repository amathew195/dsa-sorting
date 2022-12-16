function merge(nums1, nums2) {
  let sortedArr = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      sortedArr.push(nums1[p1]);
      p1++;
    } else {
      sortedArr.push(nums2[p2]);
      p2++;
    }
  }

  if (nums1[p1]) {
    sortedArr.push(...nums1.slice(p1, nums1.length));
  }

  if (nums2[p2]) {
    sortedArr.push(...nums2.slice(p2, nums2.length));
  }

  return sortedArr;
}

function mergeSort(nums) {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
  /**
   *
   *        1, 2, 3, 4
   *
   *    1,2       3, 4
   *  1     2   3     4
   *
   *  1,2         3,4
   *
   *
   *      1,2,3,4
   *
   *
   *    merge(m([1,2]))      merge(m([3,4]))
   *
   *     merge(m([1])) merge(m[2])      merge(m[3]) merge(m([4]))
   */
}

function qSort(nums) {
  if (nums.length === 1) return nums;
  const pivot = nums[nums.length - 1];
  const lesser = nums.filter((n) => n < pivot);
  const equal = nums.filter((n) => n === pivot);
  const greater = nums.filter((n) => n > pivot);
  return [...qSort(lesser), ...qSort(equal), ...qSort(greater)];
}

module.exports = { merge, mergeSort };
