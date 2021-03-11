import {MatchResult} from './MatchResult';
import {MatchReader} from './MatchReader';

const matchReader = new MatchReader('football.csv');
matchReader.read();

const matches = matchReader.data;

let manUnitedWins = 0;

matches.forEach(match => {
    if (
        (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    ) {
        manUnitedWins++;
    }
});

console.log('manchester united wins: ', manUnitedWins);
