

  // show options that someone could use to create graph with

  // /stock/metric?symbol=AAPL&metric=all
  // https://finnhub.io/api/v1/news?category=general&token=btd1ssn48v6q5ac9egf0
  // 

async function createGraph () {
  clearResponseField();
  const jsonResponse = await templateFetch('https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=btd1ssn48v6q5ac9egf0');
console.log(jsonResponse.series.annual.cashRatio.length);
  //console.log(jsonResponse.series.annual.cashRatio[0].period);
  for (let i = 0; i < jsonResponse.series.annual.cashRatio.length; i++){
    console.log(jsonResponse.series.annual.cashRatio[i].period);
  }


  //var table = document.createElement('tr');
  //table.setAttribute("id", table);

  


  for (var key of Object.keys(jsonResponse.series.annual)) {
    var element = document.createElement('tr');
    element.setAttribute("id", key);
    element.innerHTML = key;
    
    document.getElementById("responseField").appendChild(element);
  }
}
