function Max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (max < arr[i]) {

            max = arr[i]

        }

    }
    return max;
}

let arr = [1, 2, 3, 4, 5]
console.log(Max(arr));