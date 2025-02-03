console.log("Begin");

// ////////////////////////////////
// let array = [];
// const MAXLENGTH = 500;
// for (let i = 0; i < MAXLENGTH; i++) {
//     array.push(Math.floor(Math.random() * 1000) + 1);
// }
// console.log(array);

// array.sort((a, b) => a - b)
// console.log(array);

// // function quicksort(arr) {
// //     if (arr.length < 2) return arr; // Base case: arrays with 0 or 1 element are already sorted
// //     const pivot = arr[Math.floor(arr.length / 2)];
// //     const left = arr.filter(x => x < pivot);
// //     const middle = arr.filter(x => x === pivot);
// //     const right = arr.filter(x => x > pivot);
// //     return [...quicksort(left), ...middle, ...quicksort(right)];
// // }

// // console.log(quicksort(array));
// ////////////////////////


////////////////////
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.
// @param {number[]} nums
// @return {boolean}
// this will check the array by going from first element to the last checking the element in front of it
// if the element in front is lower than the checked element more than twice the array cannot be rotated to be nondecreasing
// for the last element you want to check the element ahead but you cant, its the last element,
// so you get the last element plus one MOD the array length. 

// var check = function(nums) {
//     let count = 0;
//     for (let i=0; i < nums.length; i++){
//             console.log("i = " + i + " num at this point in array " + nums[i] + " next num " + nums[(i + 1) % nums.length]);
//             if (nums[i] > nums[(i + 1) % nums.length]) {
//                 count++;
//             }
//     }
//  console.log("count is " + count);
//     if (count > 1) {
//         return false
//     }else {
//         return true
//     }
// };

var check = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log("i = " + i + " num at this point in array " + nums[i] + " count is " + count);
        if (i + 1 < nums.length) {
            console.log("first " + nums[i] + " second " + nums[(i + 1)]);
            if (nums[i] > nums[(i + 1)]) {
                count++;
            }
        } else if (i + 1 == nums.length) {
            console.log("last");
            console.log("first " + nums[i] + " second " + nums[0]);
            if (nums[i] > nums[0]) {
                count++;
            }
        }
    }
    console.log("count is " + count);
    if (count > 1) {
        return false
    } else {
        return true
    }
};

nums = [3, 4, 5, 1, 2];
// nums =[2,1,3,4];
// nums =[1,2,3];
check(nums);
/////////////////////////////

