app.controller('TweetsController', TweetsController);

function TweetsController(tweetsService, userService) {
	var vm = this;

	vm.tweets = [];
	vm.domains = [];

	vm.getTweets = function(){
		if(userService.user){		
			tweetsService.getTweets(userService.user.userId).then(function(data){
				vm.tweets = objToArray(data);
				console.log("Tweets: ", vm.tweets);
			}, function(err){
				console.log("Error: ", err);
			});		
		}
		else{
			userService.getMe().then(function(data){
				tweetsService.getTweets(data.userId).then(function(data){
					vm.tweets = objToArray(data.tweets);
					console.log("Tweets: ", vm.tweets);
				}, function(err){
					console.log("Error: ", err);
				});
			}, function(err){
				console.log("Error: ", err);
			});
		};

	}();

	var objToArray = function(Obj){
		var array = Object.keys(Obj).map(function(value) {
	    return Obj[value];
		});
		return array;
	};
};