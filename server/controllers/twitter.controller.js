const OAuth = require('oauth')

module.exports = {
    shareTwitter: (req, res) => {
        const oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CONSUMER_KEY,
            process.env.CONSUMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            
            process.env.ACCESS_TOKEN, 
            process.env.ACCESS_TOKEN_SECRET,
            {
                status: `I need a team to play dota... Let's join the click link below
                https://store.steampowered.com/join/`
                
            },
            function (err, data, response) {
                if(err){
                    res.status(400).json({
                        message: 'Get Data ERROR',
                        error: err
                    })
                } else {
                    res.status(200).json({
                        message: 'Get Data Successed',
                        data: JSON.parse(data)
                    })
                }
            }
        );
    }
}