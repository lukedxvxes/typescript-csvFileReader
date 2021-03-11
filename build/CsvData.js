"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvData = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvData = /** @class */ (function () {
    function CsvData(path) {
        this.data = [];
        this.path = path;
    }
    CsvData.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.path, {
            encoding: 'utf8',
        })
            .split('\n')
            .map(function (line) {
            return line.split(',');
        });
    };
    Object.defineProperty(CsvData.prototype, "returnData", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    return CsvData;
}());
exports.CsvData = CsvData;
