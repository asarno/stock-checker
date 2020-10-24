import useSWR from 'swr';
import { getStock }from '../api/stocks';

export function useStock(symbol: string) {
	// SWR is a caching library created by creator of NextJS (Think Apollo without GraphQL)
	const { data, error } = useSWR(`/symbol/${symbol}`, () => getStock(symbol));
	// normally would add an event/socketlistener here 
	// which would update the appropriate cached stock payload with swr's `mutate` function
	// but for the sake of this demo project that is unnecessary
	return { data, error, isValid: !!data };
}