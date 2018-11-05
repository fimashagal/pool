"use strict";
function Pool (...poolItems) {
    this.items = [];
    this.involvedItems = [];
    poolItems.length && this.useSet(poolItems);
}

Pool.prototype.useSet = function (...array) {
    if(array.length === 1 && Array.isArray(array[0])){
        array = array[0];
    }
    if(array.length){
        array = [...new Set(array)];
        this.items = array;
        this.involvedItems = Array.from(array);
    }
    return this;
};

Pool.prototype.getOne = function () {
    if(this.involvedItems.length === 0){
        this.involvedItems = Array.from(this.items);
    }
    const randomIndex = Math.floor(Math.random() * this.involvedItems.length);
    return this.involvedItems.splice(randomIndex, randomIndex + 1)[0];
};


define(function () {
    return Pool;
});