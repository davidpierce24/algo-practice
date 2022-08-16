// Contains Duplicate
    var containsDuplicate = function(nums) {
        let map = {}
        for(let i of nums){
            if(i in map){
                return true
            } else {
                map[i] = 1
            }
        }
        return false
    };


// Valid Anagram
    var isAnagram = function(s, t) {
        if(s.length != t.length){
            return false
        }
        let mapS = {}
        let mapT = {}
        for(let i = 0, j = 0; i < s.length, j < t.length; i++, j++){
            if(s[i] in mapS){
                mapS[s[i]] += 1
            } else {
                mapS[s[i]] = 1
            }
            if(t[i] in mapT){
                mapT[t[i]] += 1
            } else {
                mapT[t[i]] = 1
            }
        }
        for(let i in mapS){
            if(i in mapT && mapT[i] == mapS[i]){
                continue
            } else {
                return false
            }
        }
        return true
    };


// Two Sum
    var twoSum = function(nums, target) {
        var obj = {}
        for (var i in nums){
            if(obj[target - nums[i]] != undefined){
                return [obj[target-nums[i]], i]
            }
            else{
                obj[nums[i]] = i
            }
        }
        return []
    };


// Valid Palindrome
    var isPalindrome = function(s) {
        var newstr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        for(var i = 0, j = newstr.length-1; i <= j; i++, j--){
            if(newstr[i] != newstr[j]){
                return false
            }
        }
        return true
    };


// Best Time to Buy and Sell Stock
    var maxProfit = function(prices) {
        var profit = 0
        var min = prices[0]
        for(var i of prices){
            if(i - min > profit){
                profit = i - min
            }
            if(i < min){
                min  = i
            }
        }
        return profit
    };


// Valid Parentheses
    var isValid = function(s) {
        if(s.length%2 != 0){
            return false
        }
        var stack = []
        
        for(var i of s){
            if(stack[stack.length-1] == '{' && i == '}' || stack[stack.length-1] == '(' && i == ')' || stack[stack.length-1] == '[' && i == ']'){
                stack.pop()
            }
            else{
                stack.push(i)
            }
        }
            
        return stack.length == 0
    };