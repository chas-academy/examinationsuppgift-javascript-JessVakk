const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn");

incomeBtn.addEventListener("click", function(){
    if(amountInput.value.trim()===''|| descInput.value.trim()===''){
         console.log("Empty field!");
         return; 
    }   
    console.log(descInput.value);
    console.log(amountInput.value);
});

