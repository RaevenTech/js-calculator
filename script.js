// calculator application
let currentValue = ""
let previousValue = ""
let operator = ""

document.addEventListener("DOMContentLoaded", function(e) {
  const clearBtn = document.querySelector(".clear-btn")
  const equalBtn = document.querySelector(".equal-sign")
  const decimalBtn = document.querySelector(".decimal-point")
  const numbersBtn = document.querySelectorAll(".number")
  const opertatorsBtn = document.querySelectorAll(".operator")
  const previousScreen = document.querySelector("#previous-input")
  const currentScreen = document.querySelector("#current-input")

  numbersBtn.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
  }))
})

function handleNumber(num){
  console.log(num)
}
