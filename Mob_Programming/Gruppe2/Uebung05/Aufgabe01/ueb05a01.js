const bmiBtn = document.getElementById("calculateBmi");
const bmiText = document.getElementById("bmiValue");
const weight = document.getElementById("gewicht");
const height = document.getElementById("groesse");

const calculateBmi = (weight, height) => {
  return weight / (height * height);
};

bmiBtn.onclick = () => {
  const bmi = calculateBmi(parseFloat(weight.value), parseFloat(height.value));

  bmiText.innerHTML = bmi.toFixed(2);
};
