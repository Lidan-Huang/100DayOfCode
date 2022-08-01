from typing import List


# runtime: O(n^2) | space: O(1)
def rotate_image(matrix: List[List[int]]) -> None:
    """
    Accept an n x n 2D matrix representing an image, rotate the image by 
    90 degrees (clockwise).

    Do not return anything, modify matrix in-place instead.
    """

    left: int = 0
    right: int = len(matrix) - 1

    while left < right:
        for i in range(right - left):
            top: int = left
            bottom: int = right

            # save topleft to temp
            temp: int = matrix[top][left + i]

            # move bottomleft to topleft
            matrix[top][left + i] = matrix[bottom - i][left]

            # move bottomright to bottomright
            matrix[bottom - i][left] = matrix[bottom][right - i]

            # move topright to bottomright
            matrix[bottom][right - i] = matrix[top + i][right]

            matrix[top + i][right] = temp
            print(matrix)
        # after moving top, bottom, left and right line, move to inner matrix
        left += 1
        right -= 1


rotate_image([[5, 1, 9, 11], [2, 4, 8, 10],
      [13, 3, 6, 7], [15, 14, 12, 16]])
