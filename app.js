const nrPeople = document.getElementById("nr-people");
const bill = document.getElementById("bill-inp");
const btns = document.querySelectorAll(".btn");
const tipAmountText = document.getElementById("tip-amount");
const totalAmountText = document.getElementById("total-amount");
const resetButton=document.querySelector('.btn-reset')
let tipAmount = 0;
let totalAmount = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      btns[i].classList.add('active')
    let tipPercent = Number(btns[i].textContent/100)
    console.log(tipPercent);
    let numberPeople = Number(nrPeople.value);
    let billValue = Number(bill.value);
    if (nrPeople.value) {
       tipAmount+=(billValue*tipPercent)/numberPeople;
       tipAmountText.innerText=tipAmount.toFixed(2)
       totalAmount+=(billValue/numberPeople)+tipAmount
       totalAmountText.innerText=totalAmount.toFixed(2)
       

        

    } else {
      tipAmount = (billValue * tipPercent).toFixed(2);
      console.log(tipAmount);
      tipAmountText.innerText = Number(tipAmount);
      console.log(tipAmount);
      totalAmount = Number(bill.value) + Number(tipAmount);
      console.log(totalAmount);
      totalAmountText.innerText = totalAmount;
    }
  });
  resetButton.addEventListener('click',function(){
    btns[i].classList.remove('active')
    bill.value=''
    tipAmountText.innerText='0'
    totalAmountText.innerText=0
    nrPeople.value=''
})
}


