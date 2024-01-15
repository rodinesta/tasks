const method = (array) => {
    return array.map((word) => {
        let newWord = ''
        const reversedWord = word.split('').reverse().slice(1).join('')

        newWord = word + reversedWord
        return newWord
    });
}

const array = ['дим', 'манек', 'рота']

console.log(method(array))