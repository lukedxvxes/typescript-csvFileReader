"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
var matchReader = new MatchReader_1.MatchReader('football.csv');
matchReader.read();
var matches = matchReader.data;
var manUnitedWins = 0;
matches.forEach(function (match) {
    if ((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
});
console.log('manchester united wins: ', manUnitedWins);
