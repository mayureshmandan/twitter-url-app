# Twitter Url App

A MEAN app in which you can log in with twitter to see the latest tweets containing url in your timeline.
---

### Getting Started
* Perform a clone of this repo `git clone https://github.com/mayureshmandan/twitter-url-app.git`
* Install [Mongodb](https://www.mongodb.com/download-center#community) on your system.
* Install the required packages `npm install`
* For twitter authentication obtain your access keys and token from [twitter](https://apps.twitter.com/) after creating an app.
* Create a auth.js file in config folder:
```javascript
module.exports = {
    'twitterAuth' : {
        'consumerKey'        : '',
        'consumerSecret'     : '',
        'accessToken'        : '',
        'accessTokenSecret'  : '',
        'callbackURL'        : 'http://127.0.0.1:8080/auth/twitter/callback'
    }
};
```
* Run the server `node server`
* Open http://127.0.0.1:8080

