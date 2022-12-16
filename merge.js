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

function mergeSort() { }

module.exports = { merge, mergeSort };