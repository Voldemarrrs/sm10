const form = document.querySelector('.form')
const input = document.getElementById('input')
const data = document.getElementById('data')
const error = document.querySelector('.error')
const error2 = document.querySelector('.error2')
const ssilka = document.querySelector('.ssilka')



form.addEventListener('submit', function(event){

    let date = 2023
let age = date - data.value;
console.log(age)


    event.preventDefault()

    if(input.value == ''){
        error.innerHTML = 'Введите имя'
    } else if (input.value.length <= 2){
        error.innerHTML = 'Имя не менее 2х символов'
        input.style.boxShadow = '0 0 5px 5px red'
    } else{
        error.innerHTML = ''
        input.style.boxShadow = '0 0 5px 5px green'
    }
    if(data.value == ''){
        error2.innerHTML = 'Введите год рождения'
    } else if (data.value.length != 4){
        error2.innerHTML = 'Год рождения должке содержать 4 цифры'
        data.style.boxShadow = '0 0 5px 5px red'
    }
    else if (age <= 18){
        error2.innerHTML = 'Возраст не менее 18'
        data.style.boxShadow = '0 0 5px 5px red'
    }
    else{
        error2.innerHTML = ''
        data.style.boxShadow = '0 0 5px 5px green'
        ssilka.innerHTML = 'https://club.z-go.ru/?p=profile'
    } 

    
})