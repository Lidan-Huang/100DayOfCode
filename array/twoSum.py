from typing import Dict, List

def two_sum(nums: List[int], target: int) -> List[int]:
    """Given an array of integers nums and an integer target, return indices 
    of the two numbers such that they add up to target.

    Assume each input would have exactly one solution, and you may not use the 
    the same element twice.

    You can return the answer in any order.

    >>> nums = [2,7,11,15], target = 9
    [0, 1]
    >>> nums = [3,2,4], target = 6
    [1, 2]
    >>> nums = [3,3], target = 6
    [0, 1]
    """

    freq: Dict[int, int] = dict()    
        
    for i in range(len(nums)):
        diff: int = target - nums[i]
        if (diff in freq):
            return [i, freq[diff]]
        else:
            freq[nums[i]] = i

