'use strict';

module.exports = function (a, b) {
    var output = (a + b) % 360;

    if (output < 0) {
        output += 360;
    }

    return output;
};
