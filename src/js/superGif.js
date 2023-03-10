export default class SuperGif {
  static getGiphy(search) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`;
      
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, search]);
        } else {
          reject([response, search]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}  