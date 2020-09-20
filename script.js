
const getResult = () => {
  const endPoint = url + news + tokenParam + apiKey;
  console.log(endPoint);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderInformation(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();

}

renderInformation = (res) => {
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
    //informationArray properties
    //summary > image 
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

const fetchResult = () => {
  const endPoint = url + news + tokenParam + apiKey;
  fetch(endPoint).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
  }, networkError => { // note the , is to record the fail procedures
      console.log(networkError.message);
  }).then(jsonResponse => { 
    console.log(jsonResponse[0].headline);
    return jsonResponse; //normal
  });
}

async function renderNews () {
  await renderInformation(fetchResult);
}

