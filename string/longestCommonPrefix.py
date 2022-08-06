from typing import List

def longestCommonPrefix(strs: List[str]) -> str:
    """
    Accept a list of strings, return the common prefix of the strings, if no
    common prefix, return empty string "".

    >>> strs = ["flower","flow","flight"]
    "fl"
    >>> strs = ["flower","pow"]
    ""
    >>> strs = ["flower"]
    "flower"
    >>> strs = ["flower", ""]
    ""

    constraints:
        1 <= strs.length <= 200
        0 <= strs[i].length <= 200
        strs[i] consists of only lowercase English letters.
    """
    prev: str = strs[0]
    if len(strs) == 1:
        return prev

    for i in range(1, len(strs)):
        result: str = commonPrefix(prev, strs[i])

        if len(result) == 0:
            return ""
        else:
            prev = result

    return prev


def commonPrefix(str1: str, str2: str) -> str:
    """
    Accept two strings, return a string that contains common prefix of two input
    strings, if no common prefix, return "" empty string.
    """
    result: str = ''
    if len(str1) == 0 or len(str2) == 0:
        return result

    i: int = 0

    while i < len(str1) and i < len(str2):
        if str1[i] == str2[i]:
            result += str1[i]
            i += 1
        else:
            break

    return result
