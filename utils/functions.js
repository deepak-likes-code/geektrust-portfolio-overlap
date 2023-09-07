"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStock = exports.calculateOverlap = exports.currentPortfolio = void 0;
const mutualFunds_1 = require("../mutualFunds");
const db_1 = require("./db");
const currentPortfolio = (funds) => {
    funds.map((fund) => {
        const i = mutualFunds_1.mutualFunds.findIndex((mutualFund) => mutualFund["name"] === fund);
        if (i !== -1) {
            db_1.currentFunds.push(mutualFunds_1.mutualFunds[i]);
        }
    });
};
exports.currentPortfolio = currentPortfolio;
const calculateOverlap = (newFund) => {
    const newFundPortfolio = mutualFunds_1.mutualFunds.find((fund) => fund["name"] === newFund);
    if (newFundPortfolio) {
        for (const fund of db_1.currentFunds) {
            overlapPercentage(fund, newFundPortfolio);
        }
    }
    else {
        console.log('FUND_NOT_FOUND');
    }
};
exports.calculateOverlap = calculateOverlap;
const addStock = (fundName, stock) => {
    const i = db_1.currentFunds.findIndex((fund) => fund.name === fundName);
    if (i !== -1) {
        db_1.currentFunds[i].stocks.push(stock);
    }
    else {
        console.log('FUND_NOT_FOUND');
    }
};
exports.addStock = addStock;
const overlapPercentage = (fund1, fund2) => {
    const overlap = fund1.stocks.filter((stock) => fund2.stocks.includes(stock));
    const overlapPercentage = (overlap.length / (fund1.stocks.length + fund2.stocks.length)) * 100 * 2;
    const overlapPercentageRounded = overlapPercentage.toFixed(2);
    console.log(`${fund2.name} ${fund1.name} ${overlapPercentageRounded}%`);
};
