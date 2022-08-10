// 1 add
// function solution(param1, param2) {
//     return param1 + param2
// }


// 2 centuryFromYear
// function solution(year) {
//     return Math.ceil(year/100)
// }

// 3 checkPalindrome
// function solution(inputString) {
//     if(inputString.length == 1){
//         return true
//     }
//     for(let i = 0, j = inputString.length-1; i < inputString.length, j >=0; i++, j--){
//         if(inputString[i] == inputString[j]){
//             continue
//         }
//         return false
//     }
//     return true
// }

// 4 adjacentElementsProduct
// function solution(inputArray) {
//     let product = inputArray[0]*inputArray[1]
//     for(let i = 1; i < inputArray.length-1; i++){
//         if(inputArray[i] * inputArray[i+1] > product){
//             product = inputArray[i] * inputArray[i+1]
//         }
//     }
//     return product
// }

// 5 shapeArea
// function solution(n) {
//     return ((((n*2)-1)*n)-(n-1))
// }

// 6 makeArrayConsecutive2
// function solution(statues) {
//     let big = statues[0]
//     let small = statues[0]
//     for(let i in statues){
//         if(statues[i] < small){
//             small = statues[i]
//         } else if (statues[i] > big){
//             big = statues[i]
//         }
//     }
//     return (big-small - (statues.length-1))
// }

// 7 almostIncreasingSequence
// function solution(sequence) {
//     let count = 0
//     for(let i = 0; i < sequence.length-1; i++){
//         if(sequence[i+1] <= sequence[i]){
//             count ++
//         }
//         if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
//             return false;
//         }
//     }
//     console.log(count)
//     return count <= 1
// }