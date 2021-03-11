"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var teamWins = 0;
        matches.forEach(function (match) {
            if ((match[1] === _this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) ||
                (match[2] === _this.teamName && match[5] === MatchResult_1.MatchResult.AwayWin)) {
                teamWins++;
            }
        });
        return "Team " + this.teamName + " won " + teamWins + " times.";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
