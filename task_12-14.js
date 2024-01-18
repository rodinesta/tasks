// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

// task 13:
// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

//task 14:
//Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. 

class Worker {
    #name
    #surname
    #rate
    #days

    constructor(name, surname, rate, days) {
        this.#name = name
        this.#surname = surname
    }

    getSalary() {
        return this.#rate * this.#days
    }

    getName() {
        return this.#name 
    }

    getSurname() {
        return this.#surname
    }

    getRate() {
        return this.#rate
    }

    getDays() {
        return this.#days
    }

    setRate(value) {
        this.#rate = value
    }
    
    setDays(value) {
        this.#days = value
    }

    getFullName() {
        return `${this.#name} ${this.#surname}`
    }
}

let worker1 = new Worker('name1', 'surname1')

worker1.setRate(2100)
worker1.setDays(30)

console.log(`Зарплата работника ${worker1.getFullName()} = ${worker1.getSalary()} билетов банка приколов`)