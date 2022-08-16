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