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
    t.assert.equal(90, output);

});
