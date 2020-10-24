import React, { useState } from 'react';
import { Container } from './styled';
import Stock from './Stock';
import Search from './Search';

const initialState = { symbol: '', name: '' };

function Home() {
  const [stock, setSelectedStock] = useState(initialState);

  return (
    <Container>
      <Search
        setSelectedStock={setSelectedStock}
      />

      {stock.symbol !== '' && <Stock symbol={stock.symbol} />}

    </Container>
  );
}

export default Home;
