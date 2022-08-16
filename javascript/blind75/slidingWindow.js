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