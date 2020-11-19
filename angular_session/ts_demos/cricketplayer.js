"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CricketPlayer = void 0;
var player_1 = require("./player");
var CricketPlayer = /** @class */ (function (_super) {
    __extends(CricketPlayer, _super);
    function CricketPlayer(id, name, score, team) {
        var _this = _super.call(this, id, name) || this;
        _this.score = score;
        _this.team = team;
        return _this;
    }
    CricketPlayer.prototype.printCricketPlayer = function () {
        console.log("Priniting Cricket Player");
        _super.prototype.printPlayer.call(this);
        console.log("score: " + this.score);
        this.team.printTeam();
    };
    return CricketPlayer;
}(player_1.Player));
exports.CricketPlayer = CricketPlayer;
