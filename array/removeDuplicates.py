from typing import List


def remove_duplicates(nums: List[int]) -> int:
    left: int = 0
    if len(nums) == 0:
        return 0

    for right in range(1, len(nums)):
        if nums[left] != nums[right]:
            left += 1
            nums[left] = nums[right]
    return left + 1
