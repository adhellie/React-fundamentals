var axios = require('axios');



// function getUserInfo (username) {
//   return axios.get('https://api.github.com/users/' + username + param)
// }

var helpers ={
  body : {
    "route": [
      {
        "type": "pickup",
        "location": {
          "type": "city",
        }
      },
      {
        "type": "shipping",
        "location": {
          "type": "city",
        }
      }
    ],
    "packaging": {
      "packets": [
        {
          "height": 60,
          "length": 80,
          "width": 30,
          "weight": 2.5
        }
      ]
    }
  },

  getDateInfo: function(obj){
    // var config = {
    //   headers: {'Api-Key':'129fe593850a9dcc37974c1ef999f818'}
    // };
    // return axios.post('https://sandbox.api.colisweb.com/4/deliveries/options', obj, config)
    // .then(function(response){
    //   console.log(response);
    // });
    var request = new XMLHttpRequest();

    request.open('POST', 'https://sandbox.api.colisweb.com/4/deliveries/options');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Api-Key', '129fe593850a9dcc37974c1ef999f818');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    request.send(JSON.stringify(obj));
  }

};
module.exports = helpers;
module.exports = helpers;
