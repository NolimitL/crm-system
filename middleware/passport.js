const keys = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const options = {
   jwtFromRequest: ExtractJwT.fromAuthHeaderAsBearerToken,
   secretOrKey: keys.jsonWebToken
}

module.exports = function(passport){
   passport.use(
      new JwtStrategy(options, async (payload, done) => {
         try {
            const user = await User.findById(payload.userId).select('email id');
            if (user) {
               done(null, user);
            } else {
               done(null, false);
            }
         } catch (error) {
            
         }
      })
   )
}