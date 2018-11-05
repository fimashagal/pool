"use strict";
function Pool (...poolItems) {
    this.len = 0;
    this.items = [];
    poolItems.length && this.useSet(poolItems);
}

Pool.prototype.useSet = function (...array) {
    if(array.length === 1 && Array.isArray(array[0])){
        array = array[0];
    }
    if(array.length){
        array = [...new Set(array)];
        this.items = array;
        this.len = array.length;
    }
    return this;
};

Pool.prototype.getOne = function () {
    return this.items[this._genRandomIndex()];
};

Pool.prototype._genRandomIndex = function () {
    return Math.floor(Math.random() * this.len);
};

define(function () {
    return Pool;
});