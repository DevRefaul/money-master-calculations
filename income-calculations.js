
// function for converting string numbers to integer
function stringToNumberConvert(idName) {
    
    const stringInputNumber = document.getElementById(idName)
    const number = parseInt(stringInputNumber.value)

    return number

}

function totalExpences() {
        // getting the value of food expence
    const foodExpence = stringToNumberConvert('food-expence')

    // getting the value of rent expence
    const rentExpence = stringToNumberConvert('rent-expence')

    // getting the value of clothing expence
    const clothingExpence = stringToNumberConvert('clothing-expence')

    // calculating total expence
    const totalExpence = foodExpence + rentExpence + clothingExpence

    return totalExpence
}


document.getElementById('total-expences').addEventListener('click', function () {

        // getting the income value from income input field
    const totalIncome = stringToNumberConvert('total-income')


 
    const totalExpence = totalExpences()
    // setting the value of total expence
    const expence = document.getElementById('total-expence')
    expence.innerText = totalExpence


    // calculating the remaining income after all expences
    const remainingIncomeAfterExpences = totalIncome - totalExpence

    // setting the remaining income value
    const remainingMoney = document.getElementById('balance')
    remainingMoney.innerText = remainingIncomeAfterExpences
    


})


// savings sections script start

document.getElementById('savings').addEventListener('click', function () {
    

    const totalIncome = stringToNumberConvert('total-income')

    const totalExpence = totalExpences()

    // setting the remaining income value
    const remainingMoney = document.getElementById('balance')

    const remainingMoneyIs = parseInt(remainingMoney.innerText)

    const savingPercent = stringToNumberConvert('saving-percent')
    
    // calculating the amount of money to be saved
    const savedAmount = remainingMoneyIs * (savingPercent / 100)
    console.log(savedAmount)

    // calculating the remaining balance after all expences and savings
    let remainingBalance = totalIncome - (totalExpence + savedAmount)


    const saved = document.getElementById('saved-amount')
 

    if (savedAmount.value > remainingBalance) {
        alert('you cant save that much')

        // setting the saved money

        saved.innerText = ''

            remainingBalance = totalIncome - totalExpence 
            const remaining = document.getElementById('balance-after-every-expence')
            remaining.innerText = remainingBalance

            return
    } else {
        // setting the saved money

        saved.innerText = savedAmount

            // setting the value of remaing balance
        const remaining = document.getElementById('balance-after-every-expence')
        remaining.innerText = remainingBalance
        
    }


})