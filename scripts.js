let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function () {
    console.log('clicked')
    let employeeCount = document.getElementById('employee-count').valueAsNumber
    let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
    let orderCount = document.getElementById('order-count').valueAsNumber
    let workHours = document.getElementById('work-hours').valueAsNumber
    let loadTime = document.getElementById('load-time').valueAsNumber

    let kepyklaTotal = employeeCount * loavesPerEmployee
    let arPavyks = kepyklaTotal >= orderCount
    let maxPossible = Math.floor((workHours * 60) / loadTime) * employeeCount

    let results = document.getElementById('results')
    results.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${kepyklaTotal} kepalus</p>`
    results.innerHTML += `<p><strong>Reikia pagaminti:</strong> ${orderCount} kepalus</p>`
    results.innerHTML += `<p><strong>Maksimali gamybos galia:</strong> ${maxPossible} kepalai</p>`
    results.innerHTML += `<p><strong>Gamybos efektyvumas:</strong> ${((kepyklaTotal / maxPossible) * 100).toFixed(1)}%</p`
    results.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
})

// document.getElementById('employee-count').addEventListener('keyup', function(event) {
//     let inputValue = event.target.valueAsNumber
//     if(inputValue < 0) {
//         event.target.classList.add('error')
//         event.target.nextElementSibling.classList.add('show')
//     } else {
//         event.target.classList.remove('error')
//         event.target.nextElementSibling.classList.remove('show')
//     }
// })

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('employee-count').valueAsNumber = 0
    document.getElementById('loaves-per-employee').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('work-hours').valueAsNumber = 8
    document.getElementById('load-time').valueAsNumber = 30
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'

    // Pašalina klaidos formatavimą
    document.getElementById('employee-count').classList.remove('error')
    document.getElementById('loaves-per-employee').classList.remove('error')
    document.getElementById('order-count').classList.remove('error')

    // Paslėpia klaidos pranešimus
    document.getElementById('employee-count').nextElementSibling.classList.remove('show')
    document.getElementById('loaves-per-employee').nextElementSibling.classList.remove('show')
    document.getElementById('order-count').nextElementSibling.classList.remove('show')

    disabledCalculateButton.disabled = false;
})

/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/

function validateInput(event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue < 0) {
        event.target.classList.add('error', 'shake')
        event.target.nextElementSibling.classList.add('show')

        setTimeout(() => {
            event.target.classList.remove('shake')
        }, 500)
    } else {
        event.target.classList.remove('error',)
        event.target.nextElementSibling.classList.remove('show')
    }
}
// Prideda validaciją kiekvienam įvesties laukeliui
document.getElementById('employee-count').addEventListener('keyup', validateInput)
document.getElementById('loaves-per-employee').addEventListener('keyup', validateInput)
document.getElementById('order-count').addEventListener('keyup', validateInput)

// Uždraudžia mygtuką, jei įvesties laukai yra netinkami
let disabledCalculateButton = document.getElementById('calculate');
disabledCalculateButton.addEventListener('mouseenter', function () {
    let employeeCount = document.getElementById('employee-count').valueAsNumber
    let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
    let orderCount = document.getElementById('order-count').valueAsNumber

    if (employeeCount < 0 || loavesPerEmployee < 0 || orderCount < 0) {
        disabledCalculateButton.disabled = true;
    } else {
        disabledCalculateButton.disabled = false;
    }
});

