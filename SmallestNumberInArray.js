function SmallestNumberInArray(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <  min) {
            min = arr[i]
        }
    }
    return min;
}

console.log(SmallestNumberInArray([12,3,9,10]))