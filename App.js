const B5 = document.querySelector(".five");
const B10 = document.querySelector(".ten");
const B15 = document.querySelector(".fifteen");
const B25 = document.querySelector(".twentyfive");
const B50 = document.querySelector(".fifty");

const buttons = document.querySelectorAll(".tip");

const bill = document.querySelector(".bill_input");

const customTip = document.querySelector(".custom");

const numberOfPerson = document.querySelector(".person_input");
const checkPerson = document.querySelector(".ifPersonZero");

const tip = document.querySelector(".amount_answer");

const total = document.querySelector(".total_answer");

let x = 0;

const container = document.querySelector(".select_tip");
container.addEventListener("click", click);
function click(e) {
  const { target } = e;
  if (target.classList.contains("tip")) {
    buttons.forEach((button) => button.classList.remove("changeTipColor"));
    target.classList.add("changeTipColor");
    x = parseFloat(target.value);
    if (!target.classList.contains("custom"))SetAnswer();
  }
}

customTip.addEventListener("input", update);
let customtip;
function update(e) {
  customtip = parseFloat(e.target.value);
  x = customtip
  if(customtip <=100 || customtip!=0){
    console.log(customtip)
    customTip.classList.remove("redBorder");
    SetAnswer();
  }else {
    customTip.classList.add("redBorder");
  }
}

bill.addEventListener("input", updateBil);
let BILL = 0;
function updateBil(e) {
  BILL = e.target.value;
  let matches = BILL.match(/\./g);
  if (matches != null && matches.length == 2) {
    bill.classList.add("redBorder");
  } else {
    bill.classList.remove("redBorder");
  }
  BILL = parseFloat(BILL);
  SetAnswer();
}

numberOfPerson.addEventListener("input", updatePerson);
let person = 0;
function updatePerson(e) {
  person = parseFloat(e.target.value);
  if (person == 0) {
    numberOfPerson.classList.add("redBorder");
    checkPerson.style.display = "block";
  } else {
    numberOfPerson.classList.remove("redBorder");
    checkPerson.style.display = "none";
  }
  SetAnswer();
}

function SetAnswer() {
  if ((BILL != 0) && (x != 0) && (person != 0)) {
    let value = ((BILL / 100) * x) / person;
    tip.textContent = `$${value.toFixed(2)}`;
    value = BILL / person + value;
    total.textContent = `$${value.toFixed(2)}`;
  }
}

const reset = document.querySelector('.reset')
reset.addEventListener('click', () =>{
    window.location.reload(); 
})
