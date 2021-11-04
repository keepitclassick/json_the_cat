const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (body) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
      callback (null,'No such cat :('); //return error saying no such cat if undef
      } else {
      let desc = data[0].description; //save the description to a variable to pass to callback
      callback(error, desc)
      }
      }
  })
};

module.exports = { fetchBreedDescription };
