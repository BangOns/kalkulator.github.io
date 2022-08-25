// membuat penyimpanan angka dan operator
const calculator = {
  displayNumber: "0",
  numberAwal: null,
  operator: null,
  numberLanjut: false,
};
const displayNumbe = document.querySelector(".default-number");
function upadteDisplay() {
  displayNumbe.innerText = calculator.displayNumber;
}
function input(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
    return;
  }
  calculator.displayNumber += digit;
}
function op(operator) {
  if (!calculator.numberLanjut) {
    calculator.operator = operator;
    calculator.numberLanjut = true;
    calculator.numberAwal = calculator.displayNumber;
    calculator.displayNumber = "0";
  }
  else{
    alert('Mohon Di klik AC')
  }
}
function clear() {
  calculator.displayNumber = "0";
  calculator.numberAwal = null;
  calculator.operator = null;
  calculator.numberLanjut = false;
}
function hasil() {
  if (calculator.numberAwal == null || calculator.operator == null) {
    alert("masukkan Angka dan Operator");
  } else {
    let res = 0;
    if (calculator.operator == "/") {
      res +=
        parseInt(calculator.numberAwal) / parseInt(calculator.displayNumber);
    } else if (calculator.operator == "X") {
      res +=
        parseInt(calculator.numberAwal) * parseInt(calculator.displayNumber);
    } else if (calculator.operator == "+") {
      res +=
        parseInt(calculator.numberAwal) + parseInt(calculator.displayNumber);
    } else if (calculator.operator == "-") {
      res +=
        parseInt(calculator.numberAwal) - parseInt(calculator.displayNumber);
    }
    calculator.displayNumber = res;
  }
}
// panggil display number
const buttonNumber = document.querySelectorAll(".button");
buttonNumber.forEach((a) => {
  a.addEventListener("click", function (e) {
    let butt = e.target;
    if (butt.classList.contains("hapus")) {
      clear();
      upadteDisplay();
      return;
    }
    if (butt.classList.contains("operator")) {
      op(butt.innerText);
      return;
    }
    if (butt.classList.contains("hasil")) {
      hasil();
      upadteDisplay();
      return;
    }
    input(butt.innerText);
    upadteDisplay();
  });
});
// menentukan operator

// melakukan operasi
