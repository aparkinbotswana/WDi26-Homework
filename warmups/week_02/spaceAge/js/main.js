console.log("connected");

// Age
// Write a program that, given an age in seconds, calculates how old someone is in standard Earth years.
//
// Then use the program to answer the following question: If I am 1031 million seconds old, how old am I?
//
// Extensions
// Given an age in seconds, calculate how old someone would be on:
//
// Mercury (orbital period 0.2408467 Earth years)
// Venus (orbital period 0.61519726 Earth years)
// Mars (orbital period 1.8808158 Earth years)
// Jupiter (orbital period 11.862615 Earth years)
// Saturn (orbital period 29.447498 Earth years)
// Uranus (orbital period 84.016846 Earth years)
// Neptune (orbital period 164.79132 Earth years)
// An Earth year is roughly 365.25 days, or 31557600 seconds.





































//
// // First - flat - not in an object
// let planetAges = {
//   "Earth": 1,
//   "Mercury": 0.2408467,
//   "Venus": 0.61519726,
//   "Mars": 1.8808158,
//   "Jupiter": 11.862615,
//   "Saturn": 29.447498,
//   "Uranus": 84.016846,
//   "Neptune": 164.79132
// };
//
// let planetAge = function (planet, seconds) {
//   // console.log(planet);
//   // console.log(planetAges[planet]);
//   conversionRate = +planetAges[planet]
//   return (seconds / 31557600 / conversionRate)
// }
//
// // console.log(planetAge("Mercury", (1032 * 1000000)));
// const showAllAges = function () {
//   for ( let [key, value] of Object.entries(planetAges)) {
//     // console.log(key, value);
//     console.log(planetAge(key, (1032 * 1000000)))
//   }
// }
//
//
// // then in an object
//
// let spacey = {
//   planetAges: {
//     "Earth": 1,
//     "Mercury": 0.2408467,
//     "Venus": 0.61519726,
//     "Mars": 1.8808158,
//     "Jupiter": 11.862615,
//     "Saturn": 29.447498,
//     "Uranus": 84.016846,
//     "Neptune": 164.79132
//   },
//
//   showAge: function (planet, seconds) {
//     conversionRate = +planetAges[planet]
//     return (seconds / 31557600 / conversionRate)
//   },
//
//   showAllAges: function () {
//     for (let key in planetAges) {
//
//       console.log(key, this.showAge(key, (1032 * 1000000) ))
//     }
//   }
// }
