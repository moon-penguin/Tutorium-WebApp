const bmiForm = document.getElementById("bmi");
const bmiUser = document.getElementById("user");
const bmiRemark = document.getElementById("remark");
const bmiBtn = document.getElementById("calculateBmi");
const bmiBtnAjax = document.getElementById("ajaxBmi");
const bmiText = document.getElementById("bmiValue");
const weight = document.getElementById("gewicht");
const height = document.getElementById("groesse");
const email = document.getElementById("email");
const user = document.getElementById("user");
const remark = document.getElementById("remark");

const regExName = /^[a-zA-ZöüäÖÜÄ]+(\s+[a-zA-ZöüäÖÜÄ]+)+$/i;
const regExXss = /<[\s\S]+?>[\s\S]*?<\/[\s\S]+?>/i;

const calculateBmi = (weight, height) => {
  return weight / (height * height);
};

bmiBtn.onclick = () => {
  const bmi = calculateBmi(parseFloat(weight.value), parseFloat(height.value));

  bmiText.innerHTML = bmi.toFixed(2);
};

const validateForm = (e) => {
  e.preventDefault();
  if (!regExName.test(user.value)) {
    alert("Bitte Vor- und Nachname mit Leerzeichen getrennt angeben!");
    return false;
  }
  if (regExXss.test(bmiRemark.value)) {
    alert("Bitte keine tags im Textfeld!");
    return false;
  }
  bmiForm.submit();
};

bmiForm.addEventListener("submit", validateForm, false);

bmiBtnAjax.onclick = () => {
  const body = JSON.stringify({
    gewicht: weight.value,
    groesse: height.value,
    email: email.value,
    gender: document.querySelector('input[name = "gender"]:checked').value,
    user: user.value,
    remark: remark.value,
  });
  const url = "http://localhost:8080";
  const method = "POST";

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    bmiText.innerHTML = this.response;
  };

  xhttp.open(method, url, true);
  xhttp.send(body);

  // Variante mit fetch()
  // fetch(url, {
  //   method: method,
  //   body: body,
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => (bmiText.innerHTML = data));
};
