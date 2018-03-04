// The Cash Register
const cartForParty = {
  banana: "1.25",
  handkerchief: "0.99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (input) {
  let cartValues = Object.values(input);
  let valuesSum = 0;

  for (i = 0; i < cartValues.length; i++) {
    valuesSum += +cartValues[i];
  }
  return valuesSum;
};

let registerTotal = cashRegister(cartForParty);
