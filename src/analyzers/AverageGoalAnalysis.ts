import {Analyzer} from '../Summary';
import {MatchData} from '../tuples/MatchData';

export class AverageGoalsAnalysis implements Analyzer {
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let matchCount = 0;
        let goalsCount = 0;

        matches.forEach(match => {
            if (match[1] === this.teamName) {
                matchCount++;
                goalsCount += match[3];
            } else if (match[2] === this.teamName) {
                matchCount++;
                goalsCount += match[4];
            }
        });

        return `Average goals this season for ${this.teamName} was ${goalsCount / matchCount}.`;
    }
}
