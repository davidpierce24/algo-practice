// Climbing Stairs
    var climbStairs = function(n) {
        let fib = [0, 1]
        for(let i = 2; i < n+2; i++){
            fib.push(fib[i-1] + fib[i-2])
        }
        return(fib[fib.length-1])
    };