from typing import List


def rotate_image(matrix: List[List[int]]) -> None:
    """
    Accept an n x n 2D matrix representing an image, rotate the image by 
    90 degrees (clockwise).

    Do not return anything, modify matrix in-place instead.
    """

    left, right: int = 0, len(matrix)

    while left < right:
        for i in range(right - left):
            top, bottom: int = left, right

            # save topleft to temp
            temp: int = matrix[top][left + i]

            # move bottomleft to topleft
            matrix[top][left + i] = matrix[bottom - i][left]

            # move bottomright to bottomright
            matrix[bottom - i][left] = matrix[bottom][right - i]

            # move topright to bottomright
            matrix[bottom][right - i] = matrix[top + i][right]

        # after moving top, bottom, left and right line, move to inner matrix
        left += 1
        right -= 1