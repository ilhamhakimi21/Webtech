
let principal = document.getElementById("principal");
let deposit = document.getElementById("deposit");
let interest = document.getElementById("interest");
let years = document.getElementById("years");
let btn = document.getElementById("kira");

btn.addEventListener('click', CalcMonthlyPay);

function CalcMonthlyPay() {
let totalPrinciple = principal.value-deposit.value;
let totalInterest = (interest.value/100)*totalPrinciple*years.value;
let totalToPay = totalInterest+totalPrinciple;
let monthlyToPay = totalToPay/years.value/12;
document.getElementById("payment").innerHTML ="RM "+ monthlyToPay.toFixed(2);
}
