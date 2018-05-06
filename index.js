const fetch = require('node-fetch');

const priceUrl = 'https://oilprice.com/ajax/get_chart_prices/';

//fetch(priceUrl)
//    .then(res => res.text())
//    .then(body => console.log(body));


//fetch(priceUrl)
//    .then(res => res.json())
//    .then(json => console.log(json));




fetch(priceUrl)
    .then(res => res.json())
    .then(function(data){
    	var prices = data
    	console.log(prices)
    })
    .catch(function(err) { console.log(err); })

