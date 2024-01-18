// Реализуйте класс MyString, который будет иметь следующие методы: 
// метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
// метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
    static reverse(string) {
        let reversed = ''
        for (let i = string.length - 1; i >= 0; i--) {
            reversed += string[i]
        } 
        return reversed
    }

    static ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static ucWords(string) {
        let words = []
        string.split(' ').forEach(word => {
            words.push(word = this.ucFirst(word))
        });
        return words.join(' ')
    }
}

console.log(MyString.reverse('hello world'))
console.log(MyString.ucFirst('hello world'))
console.log(MyString.ucWords('hello world'))