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
        let list = {}
        for(let i in s){
            if(s[i] in list){
                list[s[i]] += 1
            } else {
                list[s[i]] = 1
            }
        }
        for(let j in t){
            if(t[j] in list){
                list[t[j]] -= 1
            } else {
                return false
            }
        }
        for(let a in list){
            if(list[a] != 0){
                return false
            }
        }
        return true
    };
