var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID"
var param = "?client_id=" + id +"&client_secret=" + sec;

function getUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

var helpers ={
	//un tableau de username est passé en paramètre
	//pour chaque username on appelle l'api avec get UserInfo
	//la fonction map passe un tableau de promesses
	//all signifie que toutes les promesses passées en parm doivent être validée pour faire le "then"
	getPlayersInfo: function(players) {
		return axios.all(players.map(function (username) {
			return getUserInfo(username)
		})).then(function (info) {
			return info.map(function(user) {
				return user.data;
			})
		}).catch(function (err) {
			console.warn('Error in getPlayersInfo');
		})
	}
};

module.exports = helpers;