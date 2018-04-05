// const OAuth = require('oauth')
// var request = require('request');

// var oauth = new OAuth.OAuth(
//     'https://api.twitter.com/oauth/request_token',
//     'https://api.twitter.com/oauth/access_token',
//     process.env.CONSUMER_KEY,
//     process.env.CONSUMER_SECRET,
//     '1.0A',
//     null,
//     'HMAC-SHA1'
// )

// module.exports = {
//     testing: function(req, res) {
//         var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
//         'v2/?key=C93D214B559B95D998A2333AD7B683FE&appid=8930';
//         request.get(url, function(error, steamHttpResponse, steamHttpBody) {
//         // Once we get the body of the steamHttpResponse, send it to our client
//         // as our own httpResponse
//         httpResponse.setHeader('Content-Type', 'application/json');
//         httpResponse.send(steamHttpBody);
//     });
//     }
// }
