let bill = document.getElementById("bill")
let list = document.querySelectorAll("ul li")
let numberofppl = document.getElementById("numberofppl")
let Tip = document.getElementById("Tip")
let total = document.getElementById("total")
let Reset = document.getElementById("Reset")
let Custem = document.querySelector(".Custem")
let cant = document.querySelector('.cant')
// Custem.onblur = function () {
//     console.log(Custem.value)
// }
let splitAmount
let tipAmount
let totalAmount
list.forEach((el) => {
    el.addEventListener("click", (e) => {
        list.forEach((el) => {
            el.classList.remove("active")

        })
        e.currentTarget.classList.add("active")
        if (el.classList.contains("active")) {
            splitAmount = (el.dataset.value / 100) * bill.value
            console.log()
        }

    })

})
Custemcal = function () {
    Custem.oninput = function () {

        if (isNaN(+Custem.value)) {
            Custem.style.cssText = `outline-color: red;`

        }
        else {
            if (numberofppl.value != "" && bill.value != "" && !isNaN(+bill.value) && !isNaN(+numberofppl.value)) {
                splitAmount = (Custem.value / 100) * bill.value
                tipAmount = splitAmount / numberofppl.value
                let tipAmountString = tipAmount.toString()
                Tip.textContent = `$${tipAmountString.slice(0, (tipAmountString.indexOf(".")) + 3)}`
                totalAmount = (bill.value / numberofppl.value) + tipAmount
                total.textContent = `$${totalAmount.toFixed(2)}`
                console.log(`${numberofppl.value}== number of ppl --- ${splitAmount} == split amount`)
            }
            splitAmount = (Custem.value / 100) * bill.value
            console.log(splitAmount)
            Custem.style.cssText = `outline-color: hsl(172, 67%, 45%);`
        }

    }
    Custem.onfocus = function () {
        list.forEach((el) => {
            el.classList.remove("active")
            splitAmount = 0
            Custem.style.cssText = `outline-color: hsl(172, 67%, 45%);`


        })

    }

}
Custemcal()
mainF = function () {
    numberofppl.oninput = function () {
        if (isNaN(+numberofppl.value) || numberofppl.value == 0) {
            numberofppl.style.cssText = `outline-color: red;`
            cant.style.display = "block"

        }


        else {
            numberofppl.style.cssText = `outline-color: hsl(172, 67%, 45%);`
            cant.style.display = "none"
            if (numberofppl.value != "" && bill.value != "") {
                list.forEach((el) => {
                    if (!isNaN(+bill.value) && (el.classList.contains("active") || Custem.value != "")) {
                        tipAmount = splitAmount / numberofppl.value
                        let tipAmountString = tipAmount.toString()
                        Tip.textContent = `$${tipAmountString.slice(0, (tipAmountString.indexOf(".")) + 3)}`
                        totalAmount = (bill.value / numberofppl.value) + tipAmount
                        total.textContent = `$${totalAmount.toFixed(2)}`
                        console.log(totalAmount)
                        console.log(total)
                    }
                })


            }



        }
        console.log(+numberofppl.value)
    }
}
mainF()
Resetit = function () {
    Reset.onclick = function () {
        splitAmount = 0
        tipAmount = 0
        totalAmount = 0
        list.forEach((el) => {
            el.classList.remove("active")
        })
        total.textContent = `$0.00`
        Tip.textContent = `$0.00`
        bill.value = ``
        Custem.value = ``
        numberofppl.value = ``
        cant.style.display = "none"

        numberofppl.style.cssText = `outline-color: hsl(172, 67%, 45%);`


    }
}
Resetit()
Allfuncs = function () {

    bill.oninput = function () {
        if (!isNaN(+bill.value)) {
            list.forEach(el => {
                if (bill.value != '' && (el.classList.contains("active"))) {
                    splitAmount = (el.dataset.value / 100) * bill.value
                    tipAmount = splitAmount / numberofppl.value
                    let tipAmountString = tipAmount.toString()
                    Tip.textContent = `$${tipAmountString.slice(0, (tipAmountString.indexOf(".")) + 3)}`
                    totalAmount = (bill.value / numberofppl.value) + tipAmount
                    total.textContent = `$${totalAmount.toFixed(2)}`
                    console.log(`${numberofppl.value}== number of ppl --- ${splitAmount} == split amount`)

                }

            })

        }

        list.forEach((el) => {
            el.addEventListener("click", () => {
                if (numberofppl.value != '' && bill.value != '' && (el.classList.contains("active")) && !isNaN(+bill.value) && !isNaN(numberofppl.value)) {
                    splitAmount = (el.dataset.value / 100) * bill.value
                    tipAmount = splitAmount / numberofppl.value
                    let tipAmountString = tipAmount.toString()
                    Tip.textContent = `$${tipAmountString.slice(0, (tipAmountString.indexOf(".")) + 3)}`
                    totalAmount = (bill.value / numberofppl.value) + tipAmount
                    total.textContent = `$${totalAmount.toFixed(2)}`
                    console.log(`${numberofppl.value}== number of ppl --- ${splitAmount} == split amount`)
                }

                // e.currentTarget.classList.add("active")
                // if (el.classList.contains("active")) {
                //     splitAmount = (el.dataset.value / 100) * bill.value
                //     console.log()
                // }

            })

        })
    }

}
Allfuncs()