const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');

module.exports.login = async function(req, res){
   const candidate = await User.findOne({email: req.body.email});
   if (candidate) {
      const passwordCompare = bcrypt.compareSync(req.body.password, candidate.password);
      if (passwordCompare) {
         // Genaration a token
         const token = jwt.sign({
            email: candidate.email,
            userId: candidate._id
         }, keys.jsonWebToken, {expiresIn: 60 * 60});
         res.status(200).json({
            token: `Bearer ${token}`
         })
      } else {
         res.status(401).json({
            message: 'Password is not correct.'
         })
      }
   } else {
      res.status(404).json({
         message: 'User with this email is not found.'
      })
   }
};

module.exports.register = async function(req, res){
   const candidate = await User.findOne({email: req.body.email});
   if (candidate) {
      res.status(409).json({
         message: 'User with this email is already registered. Use other.'
      });
   } else {
      const salt = await bcrypt.genSalt(15);
      const password = req.body.password;
      const user = new User({
         email: req.body.email,
         password: bcrypt.hashSync(password, salt)
      });
      try {
         await user.save();
         res.status(201).json(user);
      } catch (error) {   
         console.log('[User is created]');
      }
   }
}