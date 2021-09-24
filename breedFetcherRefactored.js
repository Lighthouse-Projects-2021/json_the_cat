const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0]["description"]);
    } else {
      callback("This dog breed was not found.", null);

    }
  });
};

module.exports = { fetchBreedDescription };