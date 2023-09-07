import { lineParser } from "../src/utils/processor";
import { addStock, calculateOverlap, currentPortfolio } from '../src/utils/functions';

// Mock the imported functions so we can check if they were called
jest.mock('../src/utils/functions', () => ({
    addStock: jest.fn(),
    calculateOverlap: jest.fn(),
    currentPortfolio: jest.fn()
}));

describe('lineParser', () => {

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        jest.clearAllMocks();
    });

    it('calls currentPortfolio with the correct arguments', () => {
        lineParser('CURRENT_PORTFOLIO arg1 arg2');
        expect(currentPortfolio).toHaveBeenCalledWith(['arg1', 'arg2']);
    });

    it('calls calculateOverlap with the correct argument', () => {
        lineParser('CALCULATE_OVERLAP arg1');
        expect(calculateOverlap).toHaveBeenCalledWith('arg1');
    });

    it('calls addStock with the correct arguments', () => {
        lineParser('ADD_STOCK arg1 arg2');
        expect(addStock).toHaveBeenCalledWith('arg1', 'arg2');
    });

    it('prints "Invalid command" for unknown commands', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        lineParser('UNKNOWN_COMMAND arg1');
        expect(consoleLogSpy).toHaveBeenCalledWith('Invalid command');
        consoleLogSpy.mockRestore();
    });

});
