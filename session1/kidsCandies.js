// var isGreater = function(totalCandies, candies, i){
//     // make an assumption that the totalCandies is greater than or equal to all the other kids
//     // candies in the candies array except the index i
//     let assumption = true;

//     // validate our assumption
//     // iterate or traverse the candies array
//     for(let index = 0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             // check if the assumption is true or false
//             if(totalCandies < candies[index]){
//                 // update our assumption
//                 assumption = false;
//             }
//         }
//     }

//     // return the assumption
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index = 0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             assumption = false;
//         }
//     }
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index = 0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             assumption = false;
//             break;
//         }
//     }
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     for(let index = 0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an empty boolean array -> result
//     let result = [];

//     // iterate or traverse the candies array from i -> 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than or equal to all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map((candy) => {
//         return (candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map((candy) => {
//         return (candy + extraCandies >= greatestCandy);
//     });;
// };

// time complexity: O(N)
var kidsWithCandies = function(candies, extraCandies) {
    let greatestCandy = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= greatestCandy);
};

// time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     return candies.map(candy => candy + extraCandies >= Math.max(...candies));
// };


/*
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3] -> length n (where n is the number of kids)
            i [0][1][2][3][4]
    extraCandies = 3

    result = [T, T,  ] -> length n
           i [0][1][2][3][4]
    
    
    For the kid @ i = 0
        totalCandies = candies[i] + extraCandies
                     = candies[0] + extraCandies
                     = 2 + 3
                     = 5 >= [3, 5, 1, 3]
                           i[1][2][3][4]
        5 >= 3 T
        5 >= 5 T
        5 >= 1 T
        5 >= 3 T
    
    For the kid @ i = 1
        totalCandies = candies[1] + extraCandies
                     = 3 + 3
                     = 6 >= [2, 5, 1, 3]
                           i[0][2][3][4]
        

    2. Algorithm

    a. create an empty boolean array -> result
    b. iterate or traverse the candies array from i -> 0 to candies.length - 1
        c. find the totalCandies = candies[i] + extraCandies

        d. check if the totalCandies is greater than or equal to all the other kids candies

        e. if true => push true to the result array

        f. else => push false to the result array
    
    g. return the result array

*/