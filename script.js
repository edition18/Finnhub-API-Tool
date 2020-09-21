renderNews = (res) => {
  if(!res){
    console.log(res.status)
  }
  // in case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
    return
  }

  let informationArray = [] //blank array

  for (let i = 0; i < res.length; i++) {
    informationArray.push([`<p>${res[i].headline}</p>`,`<img class="news" src="${res[i].image}"></img>`]);
  }

  for (let i = 0; i < informationArray.length; i++) {
      let subPara = document.createElement("div");

      subPara.innerHTML = `${informationArray[i][0]}${informationArray[i][1]}`;
      document.getElementById("responseField").appendChild(subPara);
  }

}

function clearResponseField(){
  let target = document.getElementById("responseField");
  while (target.hasChildNodes()) {
    target.innerHTML = "";
  }
}

const fetchResult = async() => {
  const endPoint = url + news + tokenParam + apiKey;
  console.log(endPoint);
  return fetch(endPoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }).then(jsonResponse => { 
    return jsonResponse; 
  }).catch(error => console.log(error));
};




async function showNews () {
  clearResponseField();
  const result = await fetchResult(); 
  renderNews(result);
}

async function createGraph () {
  clearResponseField();
  const jsonResponse = await templateFetch('https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=btd1ssn48v6q5ac9egf0');
  console.log(jsonResponse.series['annual']['cashRatio']);

  // need to think about how to pull the useful sub categories out

}

