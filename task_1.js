const getUniqueChars = (str) => {
    const uniqueChars = []
    for (let char of str) {
        if (!uniqueChars.includes(char))
        uniqueChars.push(char)
    }
    return uniqueChars.join('')
}

console.log(getUniqueChars('DDADSADASDAAADS'))