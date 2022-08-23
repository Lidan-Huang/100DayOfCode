"use strict";

function mergeSort(nums) {
  if (nums.length <= 1) return nums;
  
  let mid = Math.floor(nums.length / 2);
  let l = mergeSort(nums.slice(0, mid));
  let r = mergeSort(nums.slice(mid)); 
  return mergeTwoSorted(l, r);
}


//merge two sorted array with linear time
function mergeTwoSorted(nums1, nums2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  if (i === nums1.length) {
    for (let k = j; k < nums2.length; k++) {
      merged.push(nums2[k]);
    }
  } else {
    for (let k = i; k < nums1.length; k++) {
      merged.push(nums1[k]);
    }
  }
  return merged;
}