
function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  const display = document.getElementById('display');
  let expression = display.value;
  try {
      // Evaluate the expression
      let result = eval(expression);
      display.value = result;
  } catch (e) {
      display.value = 'Error';
  }
}