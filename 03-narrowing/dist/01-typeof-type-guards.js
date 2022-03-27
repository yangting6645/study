"use strict";
function printAll(strs) {
    if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
        if (typeof strs === 'string') {
            console.log(strs);
        }
        else {
            //...
        }
    }
}
