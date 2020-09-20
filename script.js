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
  
  return fetch(endPoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }).then(jsonResponse => { 
    return jsonResponse; //normal
  }).catch(error => console.log(error));
};

async function showNews () {
  const result = await fetchResult(); 
  renderNews(result);
}

