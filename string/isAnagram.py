from typing import Dict


def isAnagram(s: str, t: str) -> bool:
    sFreq = getFreq(s)
    tFreq = getFreq(t)

    return sFreq == tFreq


def getFreq( s: str) -> Dict[str, int]:
    freq: Dict[str, int] = dict()

    for char in s:
        freq[char] = freq.get(char, 0) + 1

    return freq
