let arr1 = [1,2,3,4,5,6,6,6,6,6];
let arr2 = [1,1,1,2,4,6,7,8,9,5,];

const Union = (nums1,nums2)=>{
if(nums1.length === 0) return
if(nums2.length === 0) return
let finalArr = []
for(let i = 0;i<nums1.length;i++){
    for(let j=0;j<nums2.length;j++){
        if(nums1[i]=== nums2[j]){
            if(finalArr.includes(nums1[i])){
                break;
            }else{
                finalArr.push(nums1[i])
            }
        }
    }
}

return finalArr
}

let ans = Union(arr1,arr2);
console.log(ans);