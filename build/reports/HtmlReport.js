"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(pathName) {
        this.pathName = pathName;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n            <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>Analysis Report</title>\n            </head>\n            <body>\n                <div style=\"max-width:1100px; margin: 0 auto;\">\n                    <h1>Analysis Report</h1>\n                    <p>" + report + "</p>\n                </div>\n            </body>\n            </html>\n        ";
        fs_1.default.writeFileSync(this.pathName, html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
