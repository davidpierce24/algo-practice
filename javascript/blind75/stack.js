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