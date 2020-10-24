import {
  getStock,
  getInfo,
  getPrices
} from '../../api/stocks';

test('getStock', async () => {
  expect(await getStock('TSLA')).toStrictEqual(sampleStock);
});

test('getInfo', async () => {
  expect(await getInfo('TSLA')).toStrictEqual(sampleStock.info);
});

test('getPrices', async () => {
  expect(await getPrices('TSLA')).toStrictEqual(sampleStock.pricing);
});

const sampleStock = {
  "info": {
    "symbol": "TSLA",
    "name": "Tesla, Inc",
    "description": "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, Netherlands, Norway, and internationally. The company operates in two segments, Automotive; and Energy Generation and Storage. The Automotive segment offers sedans and sport utility vehicles. It also provides electric powertrain components and systems; and services for electric vehicles through its company-owned service locations, and Tesla mobile service technicians, as well as sells used vehicles. This segment markets and sells its products through a network of company-owned stores and galleries, as well as through its own Website. The Energy Generation and Storage segment offers energy storage products, such as rechargeable lithium-ion battery systems for use in homes, industrial, commercial facilities, and utility grids; and designs, manufactures, installs, maintains, leases, and sells solar energy generation and energy storage products to residential and commercial customers. It also provides vehicle insurance services, as well as renewable energy. The company was formerly known as Tesla Motors, Inc. and changed its name to Tesla, Inc. in February 2017. Tesla, Inc. was founded in 2003 and is headquartered in Palo Alto, California.",
    "industry": "Auto Manufacturers",
    "marketCap": "389491556352",
    "ebitda": "3444999936",
    "peRatio": "1062.0048",
    "profitMargin": "0.0143",
    "targetPrice": "309.55",
    "annualHigh": "2318.49",
    "annualLow": "309.26",
    "sharesOutstanding": "933539968"
  },
  "pricing": [
    {
      "day": "2020-10-23",
      "open": 421,
      "close": 420
    },
    {
      "day": "2020-10-22",
      "open": 441,
      "close": 425
    },
    {
      "day": "2020-10-21",
      "open": 422,
      "close": 422
    },
    {
      "day": "2020-10-20",
      "open": 431,
      "close": 421
    },
    {
      "day": "2020-10-19",
      "open": 446,
      "close": 430
    },
    {
      "day": "2020-10-16",
      "open": 454,
      "close": 439
    },
    {
      "day": "2020-10-15",
      "open": 450,
      "close": 448
    },
    {
      "day": "2020-10-14",
      "open": 449,
      "close": 461
    },
    {
      "day": "2020-10-13",
      "open": 443,
      "close": 446
    },
    {
      "day": "2020-10-12",
      "open": 442,
      "close": 442
    },
    {
      "day": "2020-10-09",
      "open": 430,
      "close": 434
    },
    {
      "day": "2020-10-08",
      "open": 438,
      "close": 425
    },
    {
      "day": "2020-10-07",
      "open": 419,
      "close": 425
    },
    {
      "day": "2020-10-06",
      "open": 423,
      "close": 413
    },
    {
      "day": "2020-10-05",
      "open": 423,
      "close": 425
    },
    {
      "day": "2020-10-02",
      "open": 421,
      "close": 415
    },
    {
      "day": "2020-10-01",
      "open": 440,
      "close": 448
    },
    {
      "day": "2020-09-30",
      "open": 421,
      "close": 429
    },
    {
      "day": "2020-09-29",
      "open": 416,
      "close": 419
    },
    {
      "day": "2020-09-28",
      "open": 424,
      "close": 421
    },
    {
      "day": "2020-09-25",
      "open": 393,
      "close": 407
    },
    {
      "day": "2020-09-24",
      "open": 363,
      "close": 387
    },
    {
      "day": "2020-09-23",
      "open": 405,
      "close": 380
    },
    {
      "day": "2020-09-22",
      "open": 429,
      "close": 424
    },
    {
      "day": "2020-09-21",
      "open": 453,
      "close": 449
    },
    {
      "day": "2020-09-18",
      "open": 447,
      "close": 442
    },
    {
      "day": "2020-09-17",
      "open": 415,
      "close": 423
    },
    {
      "day": "2020-09-16",
      "open": 439,
      "close": 441
    },
    {
      "day": "2020-09-15",
      "open": 436,
      "close": 449
    },
    {
      "day": "2020-09-14",
      "open": 380,
      "close": 419
    },
    {
      "day": "2020-09-11",
      "open": 381,
      "close": 372
    },
    {
      "day": "2020-09-10",
      "open": 386,
      "close": 371
    },
    {
      "day": "2020-09-09",
      "open": 356,
      "close": 366
    },
    {
      "day": "2020-09-08",
      "open": 356,
      "close": 330
    },
    {
      "day": "2020-09-04",
      "open": 402,
      "close": 418
    },
    {
      "day": "2020-09-03",
      "open": 407,
      "close": 407
    },
    {
      "day": "2020-09-02",
      "open": 478,
      "close": 447
    },
    {
      "day": "2020-09-01",
      "open": 502,
      "close": 475
    },
    {
      "day": "2020-08-31",
      "open": 444,
      "close": 498
    },
    {
      "day": "2020-08-28",
      "open": 2295,
      "close": 2213
    },
    {
      "day": "2020-08-27",
      "open": 2180,
      "close": 2238
    },
    {
      "day": "2020-08-26",
      "open": 2060,
      "close": 2153
    },
    {
      "day": "2020-08-25",
      "open": 1974,
      "close": 2023
    },
    {
      "day": "2020-08-24",
      "open": 2126,
      "close": 2014
    },
    {
      "day": "2020-08-21",
      "open": 2044,
      "close": 2049
    },
    {
      "day": "2020-08-20",
      "open": 1860,
      "close": 2001
    },
    {
      "day": "2020-08-19",
      "open": 1865,
      "close": 1878
    },
    {
      "day": "2020-08-18",
      "open": 1898,
      "close": 1887
    },
    {
      "day": "2020-08-17",
      "open": 1677,
      "close": 1835
    },
    {
      "day": "2020-08-14",
      "open": 1664,
      "close": 1650
    },
    {
      "day": "2020-08-13",
      "open": 1611,
      "close": 1621
    },
    {
      "day": "2020-08-12",
      "open": 1470,
      "close": 1554
    },
    {
      "day": "2020-08-11",
      "open": 1396,
      "close": 1374
    },
    {
      "day": "2020-08-10",
      "open": 1448,
      "close": 1418
    },
    {
      "day": "2020-08-07",
      "open": 1499,
      "close": 1452
    },
    {
      "day": "2020-08-06",
      "open": 1490,
      "close": 1489
    },
    {
      "day": "2020-08-05",
      "open": 1492,
      "close": 1485
    },
    {
      "day": "2020-08-04",
      "open": 1495,
      "close": 1487
    },
    {
      "day": "2020-08-03",
      "open": 1449,
      "close": 1485
    },
    {
      "day": "2020-07-31",
      "open": 1515,
      "close": 1430
    },
    {
      "day": "2020-07-30",
      "open": 1488,
      "close": 1487
    },
    {
      "day": "2020-07-29",
      "open": 1501,
      "close": 1499
    },
    {
      "day": "2020-07-28",
      "open": 1504,
      "close": 1476
    },
    {
      "day": "2020-07-27",
      "open": 1435,
      "close": 1539
    },
    {
      "day": "2020-07-24",
      "open": 1416,
      "close": 1417
    },
    {
      "day": "2020-07-23",
      "open": 1678,
      "close": 1513
    },
    {
      "day": "2020-07-22",
      "open": 1599,
      "close": 1592
    },
    {
      "day": "2020-07-21",
      "open": 1639,
      "close": 1568
    },
    {
      "day": "2020-07-20",
      "open": 1519,
      "close": 1643
    },
    {
      "day": "2020-07-17",
      "open": 1513,
      "close": 1500
    },
    {
      "day": "2020-07-16",
      "open": 1477,
      "close": 1500
    },
    {
      "day": "2020-07-15",
      "open": 1543,
      "close": 1546
    },
    {
      "day": "2020-07-14",
      "open": 1556,
      "close": 1516
    },
    {
      "day": "2020-07-13",
      "open": 1659,
      "close": 1497
    },
    {
      "day": "2020-07-10",
      "open": 1396,
      "close": 1544
    },
    {
      "day": "2020-07-09",
      "open": 1396,
      "close": 1394
    },
    {
      "day": "2020-07-08",
      "open": 1405,
      "close": 1365
    },
    {
      "day": "2020-07-07",
      "open": 1405,
      "close": 1389
    },
    {
      "day": "2020-07-06",
      "open": 1276,
      "close": 1371
    },
    {
      "day": "2020-07-02",
      "open": 1221,
      "close": 1208
    },
    {
      "day": "2020-07-01",
      "open": 1083,
      "close": 1119
    },
    {
      "day": "2020-06-30",
      "open": 1006,
      "close": 1079
    },
    {
      "day": "2020-06-29",
      "open": 969,
      "close": 1009
    },
    {
      "day": "2020-06-26",
      "open": 994,
      "close": 959
    },
    {
      "day": "2020-06-25",
      "open": 954,
      "close": 985
    },
    {
      "day": "2020-06-24",
      "open": 994,
      "close": 960
    },
    {
      "day": "2020-06-23",
      "open": 998,
      "close": 1001
    },
    {
      "day": "2020-06-22",
      "open": 999,
      "close": 994
    },
    {
      "day": "2020-06-19",
      "open": 1012,
      "close": 1000
    },
    {
      "day": "2020-06-18",
      "open": 1003,
      "close": 1003
    },
    {
      "day": "2020-06-17",
      "open": 987,
      "close": 991
    },
    {
      "day": "2020-06-16",
      "open": 1011,
      "close": 982
    },
    {
      "day": "2020-06-15",
      "open": 917,
      "close": 990
    },
    {
      "day": "2020-06-12",
      "open": 980,
      "close": 935
    },
    {
      "day": "2020-06-11",
      "open": 990,
      "close": 972
    },
    {
      "day": "2020-06-10",
      "open": 991,
      "close": 1025
    },
    {
      "day": "2020-06-09",
      "open": 940,
      "close": 940
    },
    {
      "day": "2020-06-08",
      "open": 919,
      "close": 949
    },
    {
      "day": "2020-06-05",
      "open": 877,
      "close": 885
    },
    {
      "day": "2020-06-04",
      "open": 889,
      "close": 864
    }
  ]
}

