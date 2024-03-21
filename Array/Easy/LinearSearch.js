let arr = [1,2,3,4,5,6,7];

const LinearSearch =(nums,target)=>{
    if(nums.length === 0) return -1;

    for(let i = 0;i<nums.length;i++){
        if(nums[i]=== target){
            return i;
        }
    }
    return -1;

}

let ans = LinearSearch(arr,3);
console.log(ans)