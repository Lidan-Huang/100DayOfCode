from operator import truediv
from typing import List, Set


def is_happy_number(n: int) -> bool:
    unique: Set[int] = set()

    while True:
        sum = sum_of_digit_square(n)
        if sum == 1:
            return True
        else:
            if n in unique:
                return False
            unique.add(n)
            n = sum

def sum_of_digit_square(n: int) -> int:
    nums: List[str] = list(str(n))
    sum: int = 0

    for i in range(len(nums)):
        sum += int(nums[i]) * int(nums[i])
    return sum