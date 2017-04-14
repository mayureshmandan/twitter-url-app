app.factory('tweetsService', tweetsService);

function tweetsService($http) {

	tweetsService = {};
	tweetsService.tweets = [];

	tweetsService.getTweets = function(userId){
		return $http({
		method: 'GET',
		url: '/api/getUserTimeline',
		params: {user_id: userId}
	}).then(function(response) {
			console.log("Got Tweets!");
			return response.data;
		});
	};

	return tweetsService;
};

	// app.get('/api/getUserTimeline', function(req, res){
	// 	T.get('statuses/user_timeline', { user_id: req.query.user_id }, function(err, data, response) {
	// 		console.log(req.query.user_id);
	// 		var finaltweets = [];
	// 		data.forEach(function(tweet){
	// 			if(tweet.entities.urls.length > 0){
	// 				User.findOne({'twitter.id': req.query.user_id}, function(err, user){
	// 					if(err){
	// 						console.log("User not found !", err);
	// 						return;
	// 					}
	// 					var newTweet = new Tweet({'tweet_text': tweet.text, 'url': tweet.entities.urls[0].url});
						
	// 					newTweet.save({}, function(err, tweet){
	// 						if(err){
	// 							res.send(err);
	// 						}
	// 						else{
	// 							User.findOneAndUpdate({'twitter.id': req.query.user_id}, {$push:{'twitter.tweets':tweet}}, {"new":true}).populate('twitter.tweets').exec(function(err, newUser){
	// 								if(err){
	// 									res.send(err);
	// 								}
	// 								else{
	// 									console.log(newUser);
	// 									finaltweets.push(tweet);

	// 									/*newUser.populate('twitter.tweets').exec(function(err, tweets){
	// 										if(err){

	// 										}
	// 										else{
	// 											res.json(tweets);
	// 										}
	// 									})*/
	// 								}
	// 							});
	// 						};
	// 					});
	// 				});
	// 			};
	// 		})
	// 		res.json(finaltweets);
	// 	});
	// });