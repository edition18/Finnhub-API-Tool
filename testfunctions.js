const templateFetch = async(arg) => {
  
  console.log(arg);
  return fetch(arg).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }).then(jsonResponse => { 
    return jsonResponse; 
  }).catch(error => console.log(error));
};

  // show options that someone could use to create graph with

  // /stock/metric?symbol=AAPL&metric=all
  // https://finnhub.io/api/v1/news?category=general&token=btd1ssn48v6q5ac9egf0
  // 