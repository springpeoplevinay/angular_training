"use strict";
exports.__esModule = true;
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(teamid, teamName, coachName) {
        this.teamid = teamid;
        this.teamName = teamName;
        this.coachName = coachName;
    }
    Team.prototype.printTeam = function () {
        console.log("Printing Team Details.....");
        console.log("TeamId : " + this.teamid);
        console.log("Team Name : " + this.teamName);
        console.log("Coach Name : " + this.coachName);
    };
    return Team;
}());
exports.Team = Team;
