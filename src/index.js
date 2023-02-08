import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";


// Business Logic

class SearchWord {
  constructor(inputWord) {
    this.word = inputWord;
  }
}

function searchGiphy (search) {
    
  let promise = new Promise (function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.API_KEY}`;
  
    request.addEventListener("loadend", function() {

      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve(response);
      } else {
        reject(response);
      }
    });

    request.open("GET", url, true);
    request.send();
  });

  // UI Logic
  function printElements(apiResponse){

  }

  function handleFormSubmission(event) {
    event.preventDefault();
  }

  window.addEventListener("load", function() {
    document.querySelector('form').addEventListener("submit", handleFormSubmission);
  });
}