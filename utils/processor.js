"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineParser = void 0;
const functions_1 = require("./functions");
const lineParser = (line) => {
    const arr = line.split(' ');
    switch (arr[0]) {
        case 'CURRENT_PORTFOLIO':
            (0, functions_1.currentPortfolio)(arr.slice(1, arr.length));
            break;
        case 'CALCULATE_OVERLAP':
            (0, functions_1.calculateOverlap)(arr[1]);
            break;
        case 'ADD_STOCK':
            (0, functions_1.addStock)(arr[1], arr[2]);
            break;
        default:
            console.log('Invalid command');
    }
};
exports.lineParser = lineParser;
