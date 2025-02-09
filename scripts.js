let calculation = eval(localStorage.getItem("calculation")) || "";
showCalculation(calculation);

function updateCalculation(character) {
  calculation += character;
  showCalculation(calculation);
  localStorage.setItem("calculation", calculation);
}

function showCalculation(calculation) {
  document.querySelector(".js-show-calculation").innerHTML = `${calculation}`;
}
