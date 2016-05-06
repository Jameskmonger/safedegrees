'use strict';

const test = require('modunit');
const safedegrees = require('./index');

test('adding multiples of 360 returns original', (t, original, next) => {

    let output = safedegrees(original, next);
    t.assert.equal(original, output);

}, [
    [ 0, 360 ],
    [ 10, 360 ],
    [ 270, 720 ],
    [ 359, 1080 ]
]);

test('270 add 180 returns 90', t => {

    let output = safedegrees(270, 180);
    t.assert.equal(90, output);

});

test('180 minus 270 returns 90', t => {

    let output = safedegrees(180, -270);
    t.assert.equal(270, output);

});

test('5 minus 10 returns 355', t => {

    let output = safedegrees(5, -10);
    t.assert.equal(355, output);

});

test('359 add 22 returns 21', t => {

    let output = safedegrees(359, 22);
    t.assert.equal(21, output);

});
