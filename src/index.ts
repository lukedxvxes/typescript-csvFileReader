import {MatchResult} from './MatchResult';
import {MatchReader} from './MatchReader';
import {CsvFileReader} from './CsvFileReader';

// Create obj that satisfys the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in obj
// satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const matches = matchReader.matches;

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
