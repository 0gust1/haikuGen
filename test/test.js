
var haikuGen = require('../index.js'),
    test = require('tape'),
    fs = require('fs'),
    metriques = require('metriques'),
    test_corpus = fs.readFileSync('./test/test_corpus.txt'),
    haiku = null

haikuGen.initializeGenerator(1, test_corpus)

haiku = haikuGen.generateHaiku()

test('generated haiku should have the correct number of sentences', function (t) {
    t.equal(haiku.length, 3, 'A correct haiku is composed of 3 sentences')
    t.comment('> '+haiku[0].join(' '))
    t.comment('> '+haiku[1].join(' '))
    t.comment('> '+haiku[2].join(' '))
    t.end()
});

test('generated haiku sentences should have the correct metering (5-7-5)', function (t) {
    t.equal(metriques.elision(haiku[0]).nb, 5, 'first sentence should be 5 syllables long')
    t.equal(metriques.elision(haiku[1]).nb, 7, 'second sentence should be 7 syllables long')
    t.equal(metriques.elision(haiku[2]).nb, 5, 'third sentence should be 5 syllables long')
    t.end()
});
