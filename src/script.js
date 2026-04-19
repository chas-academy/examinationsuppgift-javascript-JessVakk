const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn");

incomeBtn.addEventListener("click", function(){
    console.log("tryckte på knappen");
    console.log(descInput.value);
    console.log(amountInput.value);
});