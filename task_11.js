// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]] 
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const obj = {a: 1, b: 2}

const objToArray = (obj) => {
    const array = []
    for (let key in obj) {
        array.push([key, obj[key]])
    }
    return array
}

console.log(objToArray(obj));