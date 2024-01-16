const month = Math.floor(Math.random() * 12) + 1
const seasons = [
    {title: "Осень", month: [9, 10, 11]},
    {title: "Лето", month: [6, 7, 8]},
    {title: "Весна", month: [3, 4, 5]},
    {title: "Зима", month: [12, 1, 2]}
]

console.log(`Месяц ${month} - ${seasons.find(el => el.month.includes(month)).title}`)


const year = Math.floor(Math.random() * 2100) + 1

if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log(`${year} - Високосный год`)
} else {
    console.log(`${year} - Не високосный год`)
}