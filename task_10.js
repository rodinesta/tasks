// Вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]] 
// Добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его

const twoDimArray = [[1,4,5],[1,3,4],[2,6]]
const oneDimArray = []

twoDimArray.forEach(array => {
    array.forEach(element => {
        oneDimArray.push(element)
    })
});

for (let i = 0; i <= oneDimArray.length; i++) {
    for (let j = i + 1; j <= oneDimArray.length; j++) {
        if (oneDimArray[i] > oneDimArray[j]) {
            let temp = oneDimArray[i]
            oneDimArray[i] = oneDimArray[j]
            oneDimArray[j] = temp
        }
    }
}

console.log(oneDimArray)