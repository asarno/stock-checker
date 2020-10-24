import {
    search,
  } from '../../api/search';
  
  test('search', async () => {
    expect(await search('TSL')).toStrictEqual(sampleSearch);
  });

  const sampleSearch = [
      {"name": "Tesla Inc.", "symbol": "TSLA"}, 
      {"name": "Sixth Street Specialty Lending Inc.", "symbol": "TSLX"}, 
      {"name": "Transamerica Small Cap Value A", "symbol": "TSLAX"}, 
      {"name": "Transamerica Small Cap Value R6", "symbol": "TSLRX"}, 
      {"name": "Tassal Group Limited", "symbol": "TSLLF"}, 
      {"name": "Transamerica Small Cap Value I3", "symbol": "TSLTX"}, 
      {"name": "Transamerica Small Cap Value R4", "symbol": "TSLFX"}, 
      {"name": "Transamerica Small Cap Value C", "symbol": "TSLCX"}, 
      {"name": "TRANSALTA CORP MTN", "symbol": "TSLTF"}, 
      {"name": "Transamerica Small Cap Value I", "symbol": "TSLIX"},
    ];
  
  