const changeStr = (str) => {
    return str.split(' ').map((word) => {
        const firstChar = word.charAt(0);
        let newStr = ''
        for (let i = 0; i < word.length; i++) {
            newStr += firstChar
        }
        return newStr
    }).join(' ')
}

console.log(changeStr('hello alexandr!')); 