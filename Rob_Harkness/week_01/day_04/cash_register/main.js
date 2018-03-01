const cashRegister = (shoppingCart) => {
  return Object.values(shoppingCart).reduce(
    (accumulator, currval) => Number(accumulator) + Number(currval)
  );
};

const cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36'
};

console.log(cashRegister(cartForParty));
