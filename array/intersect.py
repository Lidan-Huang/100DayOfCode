from typing import List, Dict

# runtime: O(nlogn) | space: o(n)
# solution1: sort the array
def intersect(nums1: List[int], nums2: List[int]) -> List[int]:
    result: List[int] = []
    nums1.sort()
    nums2.sort()
    
    i: int = 0
    j: int = 0
    
    while i < len(nums1) and j < len(nums2):
        if (nums1[i] == nums2[j]):
            result.append(nums1[i])
            i += 1
            j += 1
        elif (nums1[i] < nums2[j]):
            i += 1
        else:
            j += 1
    
    return result


# runtime: O(n) | space: o(n) + o(m)
# solution1: sort the array
def intersect2(nums1: List[int], nums2: List[int]) -> List[int]: 
    freq1: Dict[int, int] = dict()
    result: List[int] = list()

    for num in nums1:
        freq1[num] = freq1.get(num, 0) + 1

    for num in nums2:
        if num in freq1 and freq1[num] > 0:
            result.append(num)
            freq1[num] -= 1
    return result