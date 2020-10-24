import { authedFetcher } from './index';
import { strict as assert } from "assert";

const { REACT_APP_ACCESS_KEY } = process.env;

export interface Query {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
}

export interface Option {
    name: string;
    symbol: string;
}

function transformQuery(query: Query) {
    return {
        name: query['2. name'],
        symbol: query['1. symbol'],
    }
}

export async function search(keywords: string): Promise<Query[]> {
    const { status, data } = await authedFetcher.get(`query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${REACT_APP_ACCESS_KEY}`);
    assert.equal(status, 200);
	return data.bestMatches.map(transformQuery);
}