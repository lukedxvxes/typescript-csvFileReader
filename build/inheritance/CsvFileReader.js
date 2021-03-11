"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// Generic type used to allow for variable data type to be passed to the class as the data type
// - think function arguments
// :  <T>
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader() {
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.path, {
            encoding: 'utf8',
        })
            .split('\n')
            .map(function (line) {
            return line.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
