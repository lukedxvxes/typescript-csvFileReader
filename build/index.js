"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var AverageGoalAnalysis_1 = require("./analyzers/AverageGoalAnalysis");
var HtmlReport_1 = require("./reports/HtmlReport");
var Summary_1 = require("./Summary");
// Create obj that satisfys the 'DataReader' Interface
// GETS DATA FROM SOURCE
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in obj
// satisfying the 'DataReader' interface
//PARSES DATA
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var analyzer = new AverageGoalAnalysis_1.AverageGoalsAnalysis('Man United');
var reportType = new HtmlReport_1.HtmlReport('report.html');
var summary = new Summary_1.Summary(analyzer, reportType);
summary.buildAndPrintReport(matchReader.matches);
