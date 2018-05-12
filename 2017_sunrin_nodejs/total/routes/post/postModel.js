const mysql = require('../../mysql');

exports.getPosts = (cb)=>{
    mysql.query('select * from posts;',(err,data)=>{
        cb(err,data)
    })
}
