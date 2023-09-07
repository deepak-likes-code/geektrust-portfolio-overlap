import { addStock, calculateOverlap, currentPortfolio } from './functions';

export const lineParser = (line: string) => {

    const arr = line.split(' ');

    switch (arr[0]) {
        case 'CURRENT_PORTFOLIO':
            currentPortfolio(arr.slice(1, arr.length));
            break;
        case 'CALCULATE_OVERLAP':
            calculateOverlap(arr[1]);
            break;
        case 'ADD_STOCK':
            addStock(arr[1], arr[2]);
            break;
        default:
            console.log('Invalid command');

    }
}