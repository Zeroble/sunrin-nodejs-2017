const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const passport = require('passport')
const expressSession = require('express-session')

const app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/public'));
app.use(expressSession({secret:'5unrin'}))
app.use(passport.intialize())
app.use(passport.session())
passport_local()

app.use('api/posts')

app.get('*', (req, res) => {
    res.status(404).end();
});

app.listen(3333);

console.log("open 3333");
