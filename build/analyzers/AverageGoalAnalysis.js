"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
var AverageGoalsAnalysis = /** @class */ (function () {
    function AverageGoalsAnalysis(teamName) {
        this.teamName = teamName;
    }
    AverageGoalsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var matchCount = 0;
        var goalsCount = 0;
        matches.forEach(function (match) {
            if (match[1] === _this.teamName) {
                matchCount++;
                goalsCount += match[3];
            }
            else if (match[2] === _this.teamName) {
                matchCount++;
                goalsCount += match[4];
            }
        });
        return "Average goals this season for " + this.teamName + " was " + goalsCount / matchCount + ".";
    };
    return AverageGoalsAnalysis;
}());
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
