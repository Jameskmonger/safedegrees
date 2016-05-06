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
