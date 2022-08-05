from typing import List, Dict


def strStr(haystack: str, needle: str) -> int:
    """
    Given two strings needle and haystack, return the index of the first 
    occurrence of needle in haystack, or -1 if needle is not part of haystack.

    If needle is empty string, return 0.

    >>> haystack = "hello", needle = "ll"
    2

    >>> haystack = "aaaaa", needle = "bba"
    -1

    >>> haystack = "aaaaa", needle = ""
    0
    """
    if len(needle) == 0: 
        return 0
    
    for i in range(len(haystack) - len(needle) + 1):
        for j in range(len(needle)):
            if haystack[i + j] != needle[j]:
                break
            if j == len(needle) - 1:
                return i
    
    return -1




           
