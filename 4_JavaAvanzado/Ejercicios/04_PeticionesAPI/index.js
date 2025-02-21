var request = require('request');

var options = {
  'method': 'GET',
  'url': 'http://apiclient.besoccerapps.com/scripts/api/api.php?key=9771cde971d1a94e03f8060283d69461&tz=Europe/Madrid&format=json&req=teams&league=1',
  'headers': {
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
