const wynik = document.querySelector('.wynik')
const wynik1 = document.querySelector('.wynik1')
const btn = document.querySelector('input[type="submit"]')
const btn1 = document.querySelector('#btn1')
const search = document.querySelector('#search')
let names
let dane

class Users {
    constructor(name, age, phone) {
        this.name = name
        this.age = age
        this.phone = phone
    }
}

const display = () => {
    localStorageUsers = JSON.parse(localStorage.getItem('names'))
    if (localStorageUsers === null) {
        names = []
    } else {
        for (i = 0; i < localStorageUsers.length; i++) {
            const row1 = document.createElement('div')
            row1.classList.add('row')
            row1.innerHTML = `<div>imię: ${localStorageUsers[i].name}, </div>  <div> wiek: ${localStorageUsers[i].age}, </div><div> nr telefonu: ${localStorageUsers[i].phone};</div>`
            wynik.appendChild(row1)
        }
    }
}

const saveStorage = () => {
    const localStorageUsers = localStorage.getItem('names')
    let names
    if (localStorageUsers === null) {
        names = []
    } else {
        names = JSON.parse(localStorageUsers)
    }
    const newClient = new Users(String(document.querySelector('#name').value), Number(document.querySelector('#age').value), Number(document.querySelector('#phone').value))
    names.push(newClient)
    localStorage.setItem('names', JSON.stringify(names))
}

const searchClient = () => {
    localStorageUsers = JSON.parse(localStorage.getItem('names'))
    for (i = 0; i < localStorageUsers.length; i++) {
        if (localStorageUsers[i].name == search.value || localStorageUsers[i].age == search.value || localStorageUsers[i].phone == search.value) {
            wynik1.innerHTML = `<div>imię: ${localStorageUsers[i].name},</div><div>wiek: ${localStorageUsers[i].age},</div><div>nr telefonu: ${localStorageUsers[i].phone};</div> `
        }
    }
}

btn.addEventListener('click', () => {
    wynik.innerHTML = ''
    saveStorage()
})

btn1.addEventListener('click', () => {
    searchClient()
})