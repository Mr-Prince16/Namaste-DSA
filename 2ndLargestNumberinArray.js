function secondLargestNumber(arr) {
    if (arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secondlargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondlargest && arr[i] != largest) {
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}
let array = [1, 3, 5, 5, 5, 5, 6, 20, 19, 0]
let result = secondLargestNumber(array)

console.log(result);