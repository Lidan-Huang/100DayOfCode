from typing import List

def house_robber(nums: List[int]) -> int:
    if len(nums) == 0:
        return 0
    if len(nums) == 1: 
        return nums[0]

    # make a list to hold current max robbing value and return the last one
    robs: List[int] = [0] * len(nums)
    robs[0] = nums[0]
    robs[1] = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        robs[i] = max(robs[i - 1], robs[i - 2] + nums[i])

    return robs[-1]
