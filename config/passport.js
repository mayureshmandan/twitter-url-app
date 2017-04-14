var TwitterStrategy  = require('passport-twitter').Strategy;

var User       = require('../app/models/user');

var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use(new TwitterStrategy({

		consumerKey     : configAuth.twitterAuth.consumerKey,
		consumerSecret  : configAuth.twitterAuth.consumerSecret,
		callbackURL     : configAuth.twitterAuth.callbackURL,
		passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

	},
	function(req, token, tokenSecret, profile, done) {

		process.nextTick(function() {

			// check if the user is already logged in
			if (!req.user) {

				User.findOne({ 'userId' : profile.id }, function(err, user) {
					if (err)
						return done(err);

					if (user) {

						if (!user.token) {
							user.token       = token;
							user.username    = profile.username;
							user.displayName = profile.displayName;

							user.save(function(err) {
								if (err)
									return done(err);
									
								return done(null, user);
							});
						}

						return done(null, user); // if user found return that user
					} else {
						// if there is no user then create user
						var newUser         = new User();

						newUser.userId      = profile.id;
						newUser.token       = token;
						newUser.username    = profile.username;
						newUser.displayName = profile.displayName;

						newUser.save(function(err) {
							if (err)
								return done(err);
								
							return done(null, newUser);
						});
					}
				});

			} else {
				// user already exists and is logged in
				var user         = req.user;

				user.userId      = profile.id;
				user.token       = token;
				user.username    = profile.username;
				user.displayName = profile.displayName;

				user.save(function(err) {
					if (err)
						return done(err);
						
					return done(null, user);
				});
			}

		});

	}));

};