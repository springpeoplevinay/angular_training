"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(id, name) {
        this.id = id;
        this.name = name;
    }
    Player.prototype.printPlayer = function () {
        console.log("Printing Player.....");
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
    };
    return Player;
}());
exports.Player = Player;
