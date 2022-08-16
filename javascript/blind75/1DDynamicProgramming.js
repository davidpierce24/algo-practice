// Climbing Stairs
    var climbStairs = function(n) {
        let fib = [0, 1]
        for(let i = 2; i < n+2; i++){
            fib.push(fib[i-1] + fib[i-2])
        }
        return(fib[fib.length-1])
    };

    // neetcode version
    var climbStairs = function(n) {
        let dp1 = 1;
        let dp2 = 1;
        for(let i=2; i<=n; i++) {
            const temp = dp2;
            dp2 = dp2 + dp1;
            dp1 = temp;
        }
        return dp2;
    };