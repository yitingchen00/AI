#https://leetcode.com/problems/two-sum/description/
#Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

class Solution(object):
    def twoSum(self, nums, target):
        i = 0
        j = len(nums) - 1
        
        while (nums[i] + nums[j] != target):
            if (nums[i] + nums[j] > target):
                j = j - 1
            else:
                i = i + 1
                
        return [i, j]
