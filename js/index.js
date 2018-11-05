"use strict";
define(function (require) {
    const Pool = require("./pool");

    const pool = new Pool();

    pool.useSet(
        { x: 0, y: 21 },
        { x: 10, y: 2 },
        { x: 1, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 2 },
        { x: 14, y: 24 }
    );

    console.log(pool.getOne());

});