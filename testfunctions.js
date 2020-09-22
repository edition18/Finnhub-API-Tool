

  // show options that someone could use to create graph with

  // /stock/metric?symbol=AAPL&metric=all
  // https://finnhub.io/api/v1/news?category=general&token=btd1ssn48v6q5ac9egf0
  // 


  async function createGraph () {
  clearResponseField();
  const jsonResponse = await templateFetch('https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=btd1ssn48v6q5ac9egf0');


  //Object.keys(jsonResponse.series.annual)


}
