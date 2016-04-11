/* eslint-disable */
var metr = require('metriques'),
    markov = require('markov'),
    GEN_LEN = 15;

var m = null;

function magicMarkov () {
  return m.forward(m.pick(), GEN_LEN);
}

function initializeGen (order) {
    m = order ? markov(order) : markov();
}

function generateHaiku () {
  var i = 0;
  var haiku = [];

  var res,
    cinq1,
    cinq2,
    sept1;

  res = magicMarkov();
  if (metr.elision(res).nb !== 5) {
    while (metr.elision(res).nb !== 5) {
      i++;
      res = magicMarkov();
    }
  }

  cinq1 = res;

  haiku.push(cinq1);

  i = 0;

  while (metr.elision(res).nb !== 7) {
    i++;
    res = magicMarkov();
    sept1 = res;
  }

  haiku.push(sept1);

  i = 0;
  while (metr.elision(res).nb !== 5) {
    i++;
    res = magicMarkov();
    cinq2 = res;
  }

  haiku.push(cinq2);

  return haiku;
}

function initializeGenerator (order,text, cb) {
  //initializeGen(order);
  m = order ? markov(order) : markov();
  m.seed(text, cb);
}

module.exports = {
  initializeGenerator: initializeGenerator,
  generateHaiku: generateHaiku
};

// m.seed(s, generateHaiku);
