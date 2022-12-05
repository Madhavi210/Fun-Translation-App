
var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am vidhi makani"

var  serverUrl="https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(input) {
  return serverUrl + "?" + "text=" + input;
}


function errorHandler(error) {
  console.log("error occured", error);
  alert("somthing wrong with server! try again after some time");
}


function clickHandler() {
  var inputText = txtInput.value; //taking value

  fetch(getTranslationURL(inputText)) //calling server for processing
    .then((response) => response.json())
    //.then(json=>//console.log(json.contents.translated))
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
btntranslate.addEventListener("click", clickHandler);  