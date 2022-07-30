from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(len(board)):
            if (self.isValid(board[i]) == False):
                return False

        for j in range(len(board)):
            nums: List[str] = list()
            for i in range(len(board[j])):
                nums.append(board[i][j])
            if (self.isValid(nums) == False):
                return False

        for i in range(0, len(board), 3):
            for j in range(0, len(board[i]), 3):
                nums = self.smallCube(board, i, j)
                if (self.isValid(nums) == False):
                    return False

        return True

    def isValid(self, line: List[str]) -> bool:
        nums: List[str] = list()

        for char in line:
            if (char != '.'):
                nums.append(char)

        return len(nums) == len(set(nums))

    def smallCube(self, board: List[List[str]], row: int, col: int) -> List[str]:
        nums: List[str] = list()
        for i in range(row, row + 3):
            for j in range(col, col + 3):
                nums.append(board[i][j])
        return nums


sol = Solution()
test = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]                                                                                                                                                                                                    ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
sol.isValidSudoku(test)
