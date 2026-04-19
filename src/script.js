const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const incomeList = document.getElementById("incomeList");
const balanceSaldo = document.getElementById("balance");
const expenseBtn = document.getElementById("expenseBtn");
const expenseList = document.getElementById("expenseList");

let balance = 0;

incomeBtn.addEventListener("click", function () {
  if (amountInput.value.trim() === "" || descInput.value.trim() === "") {
    console.log("Empty field!");
    return;
  }
  const amount = Number(amountInput.value);

  if (isNaN(amount)) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${descInput.value} - ${amountInput.value} kr (Inkomst)`;
  incomeList.appendChild(li);
  console.log(li);

  balance += amount;
  balanceSaldo.textContent = balance;
  console.log(balance);

  console.log(descInput.value);
  console.log(amount);
  console.log(amountInput.value);
});

expenseBtn.addEventListener("click", function () {
  if (amountInput.value.trim() === "" || descInput.value.trim() === "") {
    console.log("Empty field!");
    return;
  }
  const amount = Number(amountInput.value);

  if (isNaN(amount)) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${descInput.value} - ${amountInput.value} kr (Utgift)`;
  expenseList.appendChild(li);

  balance -= amount;
  balanceSaldo.textContent = balance;
});
