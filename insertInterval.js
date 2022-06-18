"use strict";

/**accepts: 
 * - intervals, an array of non-overlapping intervals, the intervals is sorted in
 * ascending order by starti
 * - an interval newInterval = [start, end], that represents the start and end of another interval
 * 
 * returns: intervals after the insertion
 * 
 * test case:
 * intervals = [[1,3],[6,9]], newInterval = [2,5]  => [[1, 5], [6, 9]]
 * intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] => [[1,2],[3,10],[12,16]]
 * 
 * pseudocode:
 * loop through the array, compair each item's start and end value to the new interval
 * find the right position of the new interval
 */