const request = require('request');
const breed = process.argv[2];

const fetchBreed = function(breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      //callback(error,null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0]["description"]);
    } else {
      console.log("error: invalid name");
      //callback("ERROR: invalid name",null);
    }
  });
};

fetchBreed(breed);