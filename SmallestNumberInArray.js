function smallestNumberinArray(arr){
    let min = Infinity;
    for (let i = 0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

let array = [-1,-3,10,19,15]
console.log(smallestNumberinArray(array));