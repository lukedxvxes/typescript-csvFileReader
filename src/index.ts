import {CsvFileReader} from './CsvFileReader';
import {MatchReader} from './MatchReader';

import {AverageGoalsAnalysis} from './analyzers/AverageGoalAnalysis';
import {WinsAnalysis} from './analyzers/WinsAnalysis';

import {ConsoleReport} from './reports/ConsoleReport';
import {HtmlReport} from './reports/HtmlReport';

import {Summary} from './Summary';

// Create obj that satisfys the 'DataReader' Interface
// GETS DATA FROM SOURCE
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in obj
// satisfying the 'DataReader' interface
//PARSES DATA
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const analyzer = new AverageGoalsAnalysis('Man United');
const reportType = new HtmlReport('report.html');

const summary = new Summary(analyzer, reportType);
summary.buildAndPrintReport(matchReader.matches);
