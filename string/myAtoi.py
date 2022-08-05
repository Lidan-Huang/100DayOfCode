def myAtoi(self, s: str) -> int:
    """
    >>> '3.14'
    3
    >>> '  -32  3'
    -32
    >>> '.32'
    0
    >>> 'et32'
    0
    >>> ' +32'
    32
    >>> ' +-32'
    0
    """
    min = - pow(2, 31)
    max = pow(2, 31) - 1

    result = ''

    s = s.strip()
    if len(s) == 0:
        return 0

    if s[0] == "+" or s[0] == '-' or s[0].isnumeric():
        result += s[0]
    else:
        return 0

    for i in range(1, len(s)):
        if (s[i].isnumeric()):
            result += s[i]
        else:
            break

    for char in result:
        if char.isnumeric():
            if int(result) > max:
                return max
            elif int(result) < min:
                return min
            else:
                return int(result)
    return 0
