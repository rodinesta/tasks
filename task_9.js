// Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three']
// решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

const array = [1,2,3,6,8,1,6,3,2,1,0,4]
const wordArray = ['one', 'two', 'three']

for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

console.log(array.concat(wordArray))