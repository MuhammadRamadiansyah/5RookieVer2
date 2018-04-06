const OAuth = require('oauth')
const request = require('request');
const Steam = require('node-steam')
const SteamUser = require('node-steam-user');

var client = new Steam.SteamClient();
Steam.SteamUser = new SteamUser(client);


module.exports = {

  getSteamProfile: function(req, res) {
    var url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=C93D214B559B95D998A2333AD7B683FE&steamids=${req.params.steamId}`;
    console.log(url);

    request.get(url, function(error, steamHttpResponse, steamHttpBody) {
      res.setHeader('Content-Type', 'application/json');
      res.send(steamHttpBody);
    });
  }

  /*
      output example:
      "steamid": "76561197960435530",
      "communityvisibilitystate": 3,
      "profilestate": 1,
      "personaname": "Robin",
      "lastlogoff": 1522906482,
      "profileurl": "http://steamcommunity.com/id/robinwalker/",
      "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1dd60a188883caf82d0cbfccfe6aba0af1732d4.jpg",
      "avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1dd60a188883caf82d0cbfccfe6aba0af1732d4_medium.jpg",
      "avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1dd60a188883caf82d0cbfccfe6aba0af1732d4_full.jpg",
      "personastate": 0,
      "realname": "Robin Walker",
      "primaryclanid": "103582791429521412",
      "timecreated": 1063407589,
      "personastateflags": 0,
      "loccountrycode": "US",
      "locstatecode": "WA",
      "loccityid": 3961
  */
}