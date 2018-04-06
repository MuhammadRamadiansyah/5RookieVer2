const OAuth = require('oauth')
const request = require('request');
const Steam = require('node-steam')
const SteamUser = require('node-steam-user');

var client = new Steam.SteamClient();
Steam.SteamUser = new SteamUser(client);


module.exports = {
  getDotaProfile: function(req, res) {
    var url = `https://api.opendota.com/api/players/${req.params.dotaId}`;

    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
      res.setHeader('Content-Type', 'application/json');
      res.send(steamHttpBody);
    });
  }
}