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
        var present  = 0
        for(var i = t.length-1; i>= 0; i--){
            for(var j of s){
                if(t[i] == j){
                    present += 1
                }
            }
            if(present == 0){
                return false
            }
        }
        return true
    };
