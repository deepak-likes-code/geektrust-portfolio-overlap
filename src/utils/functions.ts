import { mutualFunds } from "../mutualFunds"
import { currentFunds } from "./db"
import { fundInterface } from "../types/interfaces"

export const currentPortfolio = (funds: string[]) => {

    funds.map((fund) => {
        const i = mutualFunds.findIndex((mutualFund) => mutualFund["name"] === fund);
        if (i !== -1) {
            currentFunds.push(mutualFunds[i])
        }
    })
}


export const calculateOverlap = (newFund: string) => {
    const newFundPortfolio = mutualFunds.find((fund) => fund["name"] === newFund);
    if (newFundPortfolio) {
        for (const fund of currentFunds) {
            overlapPercentage(fund, newFundPortfolio)
        }
    } else {
        console.log('FUND_NOT_FOUND')
    }

}

export const addStock = (fundName: string, stock: string) => {
    const i = currentFunds.findIndex((fund) => fund.name === fundName)
    if (i !== -1) {
        currentFunds[i].stocks.push(stock)
    } else {
        console.log('FUND_NOT_FOUND')
    }
}

const overlapPercentage = (fund1: fundInterface, fund2: fundInterface) => {
    const overlap = fund1.stocks.filter((stock) => fund2.stocks.includes(stock))
    const overlapPercentage = (overlap.length / (fund1.stocks.length + fund2.stocks.length)) * 100 * 2
    const overlapPercentageRounded = overlapPercentage.toFixed(2)
    console.log(`${fund2.name} ${fund1.name} ${overlapPercentageRounded}%`)

}