console.log('hola');


// Space Age Warmup
// Given an age in seconds, calculate how old someone would be on:
//
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.
//
// There are 31557600 seconds in an Earth year.
//
// Bonus:
// Have the option of either returning the ages on all planets, or any of the above planets individually.




let planetAges = {

'Earth': 1,
'Mercury': 0.2408467,
'Venus':  0.61519726,
'Mars': 1.8808158,
'Jupiter':  11.862615,
'Saturn':  29.447498,
'Uranus': 84.016846,
'Neptuno': 164.79132
}

let planetAge = function (planet, second) {
  console.log(planet, seconds);
  conversionRate = planetAges[planet]
  return (seconds / 31557600 / conversionRate)
}

const showAllAges = function ( ) {
  for (let [key, value] of Object.entries(planetAges)) {
    //console.log(key value);
    console.log(planetAge(key , 1031 * 1000000));
  }
};
//console.log(planetAge( "Neptune", ( 1031 * 1000000 ) ) )


// solution 2
let spacey = {
planetAges: {
'Earth': 1,
'Mercury': 0.2408467,
'Venus':  0.61519726,
'Mars': 1.8808158,
'Jupiter':  11.862615,
'Saturn':  29.447498,
'Uranus': 84.016846,
'Neptuno': 164.79132
},
showAge: function (planet,seconds) {
  conversionRate = this.planetAges[planet]
  return (seconds, )
}
