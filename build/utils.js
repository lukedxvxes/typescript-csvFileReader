"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateSections;
    (function (dateSections) {
        dateSections[dateSections["year"] = 2] = "year";
        dateSections[dateSections["month"] = 1] = "month";
        dateSections[dateSections["day"] = 0] = "day";
    })(dateSections || (dateSections = {}));
    var dateParts = dateString.split('/').map(function (val) {
        return parseInt(val);
    });
    return new Date(dateParts[dateSections.year], dateParts[dateSections.month] - 1, dateParts[dateSections.day]);
};
exports.dateStringToDate = dateStringToDate;
