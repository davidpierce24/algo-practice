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