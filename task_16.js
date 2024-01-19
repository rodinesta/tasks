// создать класс calculation, в котором будет одна переменная calculationLine. методы: 
// setterCalculationLine который будет к переменной приравнивать значение которое передается,
// setLastSymbolCalculationLine который будет в конец строки прибавлять символ, 
// gettercalCulationLine который будет выводить переменную, 
// lastSymbol получение последнего символа, 
// deleteLastSymbol удаление последнего символа из строки

class Calculation {
    #calculationLine

    setterCalculationLine(value) {
        this.#calculationLine = value
    }

    getterCalculationLine() {
        return this.#calculationLine
    }

    setLastSymbolCalculationLine(char) {
        this.#calculationLine += char
    }

    getIndexOfLastSymbol() {
        return this.#calculationLine.length - 1
    }

    lastSymbol() {
        return this.#calculationLine[this.getIndexOfLastSymbol()]
    }

    deleteLastSymbol() {
        return this.#calculationLine.slice(0, this.getIndexOfLastSymbol())
    }
}

const calc = new Calculation()

calc.setterCalculationLine('hello world')
calc.setLastSymbolCalculationLine('!')

console.log(calc.getterCalculationLine())
console.log(calc.lastSymbol())
console.log(calc.deleteLastSymbol())