let arr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

const LinearSearch = (nums,target)=>{
if(nums.length ===0) return;

for(let i = 0;i<nums.length;i++){
    if(nums[i]===target){
        return i
    }
}
return -1

}

let ans = LinearSearch(arr,4);
console.log(ans);