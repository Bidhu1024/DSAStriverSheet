function SecondMax(arr) {
    let largest = arr.length - 1;
    let secLargest = Infinity;

    let sortedArr = arr.sort((a, b) => a - b);
   

    for (let i = sortedArr.length - 2; i >= 0; i--) {
        if (sortedArr[i] !== largest) {
            secLargest = sortedArr[i];
            break;
        }
    }
return secLargest
}

console.log(SecondMax([1, 2, 6, 2, 5, 3, 2, 3, 5, 7, 8, 9,11]))