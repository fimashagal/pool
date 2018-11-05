"use strict";
define(function (require) {
    const Pool = require("./pool");

    const pool = new Pool();

    pool.useSet(0, 1, 2, 3, 3, 4, 5, "asha", false);

    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
    console.log(pool.getOne());
});