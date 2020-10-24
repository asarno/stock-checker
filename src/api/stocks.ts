import { authedFetcher } from './index';
import { strict as assert } from "assert";

const { REACT_APP_ACCESS_KEY } = process.env;

interface priceDataRes {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
}

export interface DayPrice {
    day: string;
    open: number;
    close: number;
}

export interface Stock {
    info: {
        symbol: string;
        name: string;
        description: string;
        industry: string;
        marketCap: string;
        ebitda: string;
        peRatio: string;
        profitMargin: string;
        targetPrice: string;
        annualHigh: string;
        annualLow: string;
        sharesOutstanding: string;
    },
    pricing: DayPrice[];
}

export function transformPricingData(data: { [day: string]: priceDataRes }) {
    return Object.keys(data).map(day => {
        const currentDay = data[day];
        return {
            day,
            open: parseInt(currentDay['1. open']),
            close: parseInt(currentDay['4. close']),
        }
    });
}

export async function getPrices(symbol: string) {
    const { status, data } = await authedFetcher.get(`/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${REACT_APP_ACCESS_KEY}`);
    assert.equal(status, 200);
    return transformPricingData(data['Time Series (Daily)']);
}

export async function getInfo(symbol: string) {
    const { status, data } = await authedFetcher.get(`/query?function=OVERVIEW&symbol=${symbol}&apikey=${REACT_APP_ACCESS_KEY}`);
    assert.equal(status, 200);

    if (data.Note) {
        throw Error("API Limit Reached, please wait 1 minute (only 5 per minute are available).")
    }

    return {
        symbol: data.Symbol,
        name: data.Name,
        description: data.Description,
        industry: data.Industry,
        marketCap: data.MarketCapitalization,
        ebitda: data.EBITDA,
        peRatio: data.PERatio,
        profitMargin: data.ProfitMargin,
        targetPrice: data.AnalystTargetPrice,
        annualHigh: data['52WeekHigh'],
        annualLow: data['52WeekLow'],
        sharesOutstanding: data.SharesOutstanding,
    }
}

export async function getStock(symbol: string): Promise<Stock> {
    const resData = await Promise.all([getInfo(symbol), getPrices(symbol)]);
    return {
        info: resData[0],
        pricing: resData[1],
    };
}