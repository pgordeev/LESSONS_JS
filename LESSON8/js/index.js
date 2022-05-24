const city1 = {
  name: 'Uliyanovsk',
  population: 750000,
  getName: function getName() {
    return this.name;
  },
  getPopulation: function getName() {
    return this.population;
  },
  changeProp: function changeProp(prop, newKeyValue) {
    this[prop] = newKeyValue;
  },
};

const city2 = {
  name: 'NN',
  population: 1250000,
};

const changeNew = city1.changeProp.bind(city2, 'name', 'Tver');

changeNew();

// замыкания
function height() {
  const h = 10;
  return function (w, d) {
    return h * w * d;
  };
}
const calcVol = height();

// каррирование
function h(h) {
  return function (w) {
    return function (d) {
      return h * w * d;
    };
  };
}
console.log(h(3)(3)(3));
