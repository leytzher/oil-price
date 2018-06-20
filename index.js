const request = require('request');

// Link to oilprice.com API
const priceUrl = 'https://oilprice.com/ajax/get_chart_prices/';

let price;
request(priceUrl, (error, response, body) => {
  result = JSON.parse(body);
  wtiPrice = result[1][0];
  wtiChange = result[1][2];

  if (wtiChange > 0) {
    trend = `this is an increase of ${wtiChange} percent`;
  } else if (wtiChange < 0) {
    trend = `this is a decrease of ${Math.abs(wtiChange)} percent`;
  } else {
    trend = 'there is no change in price';
  }

  console.log(
    `The WTI price is ${wtiPrice} USD, ${trend} within the last 15 minutes`
  );
});
