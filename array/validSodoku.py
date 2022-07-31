from typing import List


class Solution:
    def is_valid_sudoku(self, board: List[List[str]]) -> bool:
        """Check whether the Sudoku is valid.    

        Each row must contain the digits 1-9 without repetition.
        Each column must contain the digits 1-9 without repetition.
        Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 
        1-9 without repetition.

        If valid Sudoku, return True, otherwise, return False.
        """
        # check all the rows
        for i in range(len(board)):
            if (self.is_valid(board[i]) == False):
                return False

        # check all the columns
        for j in range(len(board)):
            nums: List[str] = list()
            for i in range(len(board[j])):
                nums.append(board[i][j])
            if (self.is_valid(nums) == False):
                return False

        # check all the sub boxes
        for i in range(0, len(board), 3):
            for j in range(0, len(board[i]), 3):
                nums = self.sub_box(board, i, j)
                if (self.is_valid(nums) == False):
                    return False

        return True


    def is_valid(self, line: List[str]) -> bool:
        """Check list whether has duplicate numbers, if no duplicate, return
        True, else return False.
        """
        nums: List[str] = list()

        for char in line:
            if (char != '.'):
                nums.append(char)

        return len(nums) == len(set(nums))


    def sub_box(self, board: List[List[str]], row: int, col: int) -> List[str]:
        """Produce a list of strings from 3*3 matrix and return it.
        """
        nums: List[str] = list()
        for i in range(row, row + 3):
            for j in range(col, col + 3):
                nums.append(board[i][j])
        return nums


sol = Solution()
test = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
print(sol.is_valid_sudoku(test))
