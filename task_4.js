// адресс в формате 'Город: city2 Улица: street2 Дом: house2'. 
// вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'

const fetchData = async () => {
    const res = await fetch("https://raw.githubusercontent.com/jakiichu/data/main/data.json")
    let data = await res.json()
    return data
}

fetchData().then(data => {
    console.log({
        "Город": data.address.city,
        "Улица": data.address.street,
        "Дом": data.address.house
    })
    console.log(`${data.person.lastName} ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`)
})

