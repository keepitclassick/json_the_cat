const request = require('request');
const breed = process.argv.slice(2); //accept command line args
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

const fetchBreedDetails = function(breed, callback) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    } else {
      const data = JSON.parse(body);
      let breed = data[0]
      if (breed === undefined) {
        console.log('No such cat :(');
        return;
      } else {
        console.log(data[0].description);
      }
    }
  });
};

fetchBreedDetails();

