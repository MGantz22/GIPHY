import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import SuperGif from "./superGif.js";
// Business Logic

function getGiphy(search) {
  let promise = SuperGif.getGiphy();
  promise.then(function(giphyArr) {
    printElements(giphyArr);
  }, function(error) {
    printError(error);
  });
}

// UI Logic
function handleFormSubmission(event){
    event.preventDefault();
    const search = document.getElementById('search').value;
    getGiphy(search);
}

function printError(error) {
  const errorType = Object.values(error[1]);
  document.querySelector('#showResults').innerText = `There was an error: ${errorType[3]}`;
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
