import { currentPortfolio, calculateOverlap, addStock } from '../src/utils/functions';
import { mutualFunds } from "../src/mutualFunds"
import { currentFunds } from "../src/utils/db"

describe('Portfolio Management', () => {
    console.log = jest.fn();
    // Clearing up the currentFunds array before each test
    beforeEach(() => {
        currentFunds.length = 0;

    });

    it('should add funds to currentFunds', () => {
        const funds = ['AXIS_BLUECHIP', 'ICICI_PRU_NIFTY_NEXT_50_INDEX'];
        currentPortfolio(funds);
        expect(currentFunds.length).toBe(2);
    });

    it('should not add non-existent funds to currentFunds', () => {
        const funds = ['FundZ'];
        currentPortfolio(funds);
        expect(currentFunds.length).toBe(0);
    });

    it('should calculate overlap', () => {
        const mockFundName = 'FundA';
        // This test would require mocking the console.log to verify the printed overlap percentage
        console.log = jest.fn();
        calculateOverlap(mockFundName);
        expect(console.log).toHaveBeenCalled();
    });

    it('should not calculate overlap for non-existent fund', () => {
        const mockFundName = 'FundZ';
        console.log = jest.fn();
        calculateOverlap(mockFundName);
        expect(console.log).toHaveBeenCalledWith('FUND_NOT_FOUND');
    });

    it('should add a stock to a fund', () => {
        const funds = ['AXIS_BLUECHIP', 'ICICI_PRU_NIFTY_NEXT_50_INDEX'];
        currentPortfolio(funds);
        const mockFundName = 'AXIS_BLUECHIP';
        const mockStock = 'StockX';
        addStock(mockFundName, mockStock);
        const fund = currentFunds.find(f => f.name === mockFundName);
        console.log("fund", fund)
        expect(fund?.stocks.includes(mockStock)).toBeTruthy();
    });

    it('should not add a stock to a non-existent fund', () => {
        const mockFundName = 'FundZ';
        const mockStock = 'StockX';
        console.log = jest.fn();
        addStock(mockFundName, mockStock);
        expect(console.log).toHaveBeenCalledWith('FUND_NOT_FOUND');
    });

});
