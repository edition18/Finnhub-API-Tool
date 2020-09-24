

  // show options that someone could use to create graph with

  // /stock/metric?symbol=AAPL&metric=all
  // https://finnhub.io/api/v1/news?category=general&token=btd1ssn48v6q5ac9egf0
  // 

async function createGraph () {
  clearResponseField();

  var table = document.createElement('tr');
  table.setAttribute("id", table);

  const jsonResponse = await templateFetch('https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=btd1ssn48v6q5ac9egf0');
 
  //console.log(jsonResponse.series.annual.cashRatio[0].period);

  //var firstRow = document.createElement('tr');
  //firstRow.setAttribute("id", table);
  //document.getElementById("table").appendChild(firstRow);
 
  var startingRow = document.createElement('td');
  startingRow.innerHTML = "&nbsp;&nbsp;";
  document.getElementById("responseField").appendChild(startingRow);


  for (let i = 0; i < (jsonResponse.series.annual.cashRatio.length - 15); i++){


    var newRow = document.createElement('td');
    newRow.innerHTML = jsonResponse.series.annual.cashRatio[i].period
    newRow.setAttribute("id", `${jsonResponse.series.annual.cashRatio[i].period}`);
    document.getElementById("responseField").appendChild(newRow);
  }




  for (var key of Object.keys(jsonResponse.series.annual)) {
    var element = document.createElement('tr');
    element.setAttribute("id", key);
    element.innerHTML = key;
    
    document.getElementById("responseField").appendChild(element);
  }
}
