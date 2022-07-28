from typing import List

def rotate_array(nums: List[int], k: int) -> None:
    """
    Rotate array to the right of k steps in-place.
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


def reverse_array(nums: List[int], left: int, right: int) -> None:
    """
    Reverse array in-place.
    """
    while (left < right):
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1