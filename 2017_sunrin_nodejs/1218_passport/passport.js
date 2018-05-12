const passport = require('passport');
const localStategy = require('passport-local').Strategy

module.exports = () => {
    passport.serialinzerUser((user, next) => {
        next(null, user)
    })
    passport.deserializeUser((user, next) => {
        next(null, user)
    })
    passport.user(new localStrategy({
            usernameField: 'userId',
            passwordField: 'userPw',
            session: true,
            passReqToCallback: true,
        }, (req, id, pw, next) => {
            if(id === 'sunrin' && pw === '1234'){
                let user = {id,pw,date: new Date()}
                return next(null,user)
            }
            else{
                return next(null,false,{message:'Incorrect Data'})
            }
        }
    }))
}
