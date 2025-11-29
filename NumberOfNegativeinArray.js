function countNegativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count = count + 1;
        }
    }
    return count;
}

console.log(countNegativeNumbers([1,3,-1,-5,0,-10]))