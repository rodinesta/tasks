const arr = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5]

for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

const findNumber = (arr, numToFind) => {
    let startIndex = 0
    while (arr.length > 0) {
        let right = arr.length
        let middle = Math.floor(arr.length / 2)
    
        if (arr[middle] == numToFind) {
            console.log('Index of number: ' + (startIndex + middle))
            break
        } else if (arr[middle] < numToFind) {
            arr = arr.slice(middle, right)
            startIndex += middle + 1
        } else if (arr[middle] > numToFind) {
            arr = arr.slice(0, middle)
        }
    }
}

findNumber(arr, 0)