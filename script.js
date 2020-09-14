// Selecting page elements
  const inputField = document.querySelector('#input');
  const submit = document.querySelector('#submit');
  const responseField = document.querySelector('#responseField');

//declarations
  const url = "https://finnhub.io/api/v1"
  const apiKey = "btd1ssn48v6q5ac9egf0";
  const tokenParam = "&token=";
  const news = "/news?category=general"

const getResult = () => {
  const endPoint = url + news + tokenParam + apiKey;
  console.log(endPoint);
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //renderNewsResponse(xhr.response);
      renderInformation(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();

}

submit.addEventListener('click', getResult);

renderNewsResponse = (res) => {
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
    informationArray.push(`<li>${res[i].summary}</li>`);
  }

  responseField.innerHTML = `${informationArray}`;
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
    informationArray.push([`${res[i].summary}`][`${res[i].image}`]);
  }

  responseField.innerHTML = `${informationArray}`;
}
