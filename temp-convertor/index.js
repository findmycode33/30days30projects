function calculate() {
  let temperature = document.getElementById("temperature").value;
  let temp = document.getElementById("temp-diff").value;

  if (temp == "cel") {
    let fahrenheit = Math.floor(temperature * 1.8) + 32;
    document.getElementById(
      "result-contain"
    ).innerHTML = `${fahrenheit} ° Fahrenheit`;
  } else {
    let celsius = Math.floor(((temperature - 32) * 5) / 9);
    document.getElementById(
      "result-contain"
    ).innerHTML = `${celsius} ° Celsius`;
  }
}
