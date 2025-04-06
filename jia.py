#111401007劉佳珈 企管三A
#題目(1):Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
#https://leetcode.com/problems/two-sum/description/

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

#題目(2):Roman to Integer
#https://leetcode.com/problems/roman-to-integer/

class Solution:
    def romanToInt(self, s: str) -> int:
        
        
        dict_ = {
            'I': 1,
            'IV': 4,
            'V': 5,
            'IX': 9,
            'X': 10,
            'XL': 40,
            'L': 50,
            'XC': 90,
            'C': 100,
            'CD': 400,
            'D': 500,
            'CM': 900, 
            'M': 1000,
        }

        res = 0
        
        while s:
            if s[0:2] in dict_:
                res += dict_[s[0:2]]
                s = s[2:]
            elif s[0] in dict_:
                res += dict_[s[0]]
                s = s[1:]
        return res
