// Tambahkan kode JavaScript kalian di file ini
let warning = document.getElementById("warning");
let submitData = document.getElementById("submit-form");

function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(code) {
  if (isNaN(code)) return false;
  return true;
}

function checkboxIsChecked() {
  if (handleGetFormData().status === true) return true;
  return false;
}

function validateFormData(data) {
  if (
    data.name !== "" &&
    data.city !== "" &&
    data.email !== "" &&
    data.zipCode !== "" &&
    isNumber(data.zipCode) == true &&
    checkboxIsChecked() == true
  )
    return true;

  return false;
}

function submit() {
  if (validateFormData(handleGetFormData()) == false) {
    return (warning.innerHTML = "Periksa form anda sekali lagi");
  }
  warning.innerHTML = "";
}

submitData.addEventListener("click", (e) => {
  e.preventDefault();
  submit();
});
