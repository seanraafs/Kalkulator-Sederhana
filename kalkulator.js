document.getElementById("num1").addEventListener("input", formatNumber);
document.getElementById("num2").addEventListener("input", formatNumber);

function formatNumber(event) {
  const input = event.target;
  let value = input.value.replace(/\./g, "").replace(/,/g, "");
  if (isNaN(value) || value === "") {
    input.value = "";
    return;
  }
  value = parseFloat(value).toLocaleString("id-ID");
  input.value = value;
}

function parseFormattedNumber(value) {
  return parseFloat(value.replace(/\./g, "").replace(/,/g, ".")) || 0;
}

function hitung(operator) {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const num1 = parseFormattedNumber(num1Input.value);
  const num2 = parseFormattedNumber(num2Input.value);
  let result;

  if (num1Input.value === "") {
    num1Input.placeholder = "Angka tidak boleh kosong";
  }
  if (num2Input.value === "") {
    num2Input.placeholder = "Angka tidak boleh kosong";
  }

  if (num1Input.value === "" || num2Input.value === "") {
    document.getElementById("result").textContent = "Masukkan angka yang valid";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  document.getElementById(
    "result"
  ).textContent = `Hasilnya adalah: ${result.toLocaleString("id-ID")}`;
}
