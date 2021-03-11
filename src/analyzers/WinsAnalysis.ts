import {Analyzer} from '../Summary';
import {MatchData} from '../tuples/MatchData';
import {MatchResult} from '../MatchResult';

export class WinsAnalysis implements Analyzer {
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let teamWins = 0;

        matches.forEach(match => {
            if (
                (match[1] === this.teamName && match[5] === MatchResult.HomeWin) ||
                (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
            ) {
                teamWins++;
            }
        });

        return `Team ${this.teamName} won ${teamWins} times.`;
    }
}
