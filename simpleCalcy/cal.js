let Display = document.getElementById('display')

function displayNum(input) {
  Display.value += input;
}
function clearDisplay() {
  Display.value = "";
}
function Calculate() {
  Display.value = eval(Display.value);
}