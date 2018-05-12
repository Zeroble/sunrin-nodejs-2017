const Joi = require('joi');
const model = {
    user: require('./userModel'),
}

let validater = (scheme, prop = 'body', opt={}) => {
    return(req, res, next) => {
      Joi.validate(req[prop], scheme, (err, data) => {
        if (err) {
            next(err);
        }else {
            req[prop] = data;
            next();
        }
      });
    };
  };

exports.checkSession = (req, res) => {
    console.log(req.user);
    if (req.user) {
    	res.status(200).send('SESSION CHECKED');
    } else {
    	res.status(401).send('SESSION NOT DEFINED');
    }
}

exports.validate_login = validater({
    userId: Joi.string().min(4).max(16).required(),
    userPw: Joi.string().min(8).max(64).required(),
    name: Joi.string().min(2).max(16).required().when('userId', {
      'is': Joi.string().max(3),
      'then': Joi.optional(),
    })
})


exports.login = (req, res) => {
    console.log("ASD");
    res.send(200, {
        success: true,
        message: 'Authentication success!',
    });
}

exports.logout = (req, res) => {
    if (req.user) {
    	req.logout()
	console.log(req.user);
	res.send('SESSION DELETED');
    } else {
    	res.send('SESSION NOT DEFINED');
    }
}
