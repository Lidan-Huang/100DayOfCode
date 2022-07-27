from typing import List


def max_profit(prices: List[int]) -> int:
    max:int = 0
    if len(prices) < 2:
        return max
    
    left:int = 0
    right:int = 1

    while (right < len(prices)):
        diff:int = prices[right] - prices[left]

        if diff > 0:
            max += diff
        left += 1
        right += 1

    return max