const mysql = require('../../mysql.js');

exports.checkUser = (id, pw, cb) => {
    mysql.query('SELECT * FROM users WHERE user_id = ? AND user_pw = ?', [id, pw], (err, result) => {
	if (err) {
	    cb(err);
	    return ;
	}
	if (!result.length) {
	    cb(err);
	    return ;
	}
	cb(null, result);

    });
}
