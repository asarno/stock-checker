import React from 'react';

// hooks & types
import { Option } from '../api/search';

// 3rd party apps
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// sample symbol data -> had to add this due to rate limiting on smart search
// see src/hooks/search for my solution if rate limiting wasn't an issue
import options from '../res/nasdaq.json';

const initialState = { symbol: '', name: '' };

interface Props {
    setSelectedStock: (newValue: any) => void;
}

const Search: React.FC<Props> = ({
    setSelectedStock,
}) => (
        <Autocomplete
            options={options}
            getOptionLabel={({ symbol, name }: Option) => `${name} (${symbol})`}
            onChange={(option, value) => setSelectedStock(value)}
            style={{ width: 300, position: 'absolute', top: '5vh' }}
            disableClearable
            renderInput={(params: any) =>
                <TextField
                    {...params}
                    label="search stock"
                    variant="outlined"
                    onChange={() => setSelectedStock(initialState)}
                />
            }
        />
    )

export default Search;