from typing import List

def rotate_array(nums: List[int], k: int) -> None:
    """
    Rotate array to the right of k steps in-place.

    >>> rotate_array([1, 2, 3, 4, 5, 6, 7], 3)
    [5, 6, 7, 1, 2, 3, 4]
    """
    k = k % len(nums)

    # reverse the original array nums
    left: int = 0
    right: int = len(nums) - 1
    reverse_array(nums, left, right)

    # reverse the first k elements
    left = 0
    right = k - 1
    reverse_array(nums, left, right)

    # reverse the left elements starts from index k to the end
    left = k
    right = len(nums) - 1
    reverse_array(nums, left, right)
    print("nums:", nums)


def reverse_array(nums: List[int], left: int, right: int) -> None:
    """
    Reverse array in-place.
    """
    while (left < right):
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1