/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   
    let maxOnes = 0;
    let counter = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]===1){
            counter ++;
        }else{
            counter = 0;
        }
        if(counter > maxOnes){
            maxOnes = counter;
        }
    }
    return maxOnes
};