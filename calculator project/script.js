let screen = document.getElementById("screen");

function clearScreen() {
  screen.value = "";
}

function deleteChar() {
  screen.value = screen.value.slice(0, -1);
}

function appendValue(value) {
  screen.value += value;
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}