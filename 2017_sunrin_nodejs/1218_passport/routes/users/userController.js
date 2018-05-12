exports.checkLogin = (req,res) = >{
    res.send('CHECK LOGIN')
}
exports.login = (req,res)=>{
    res.status(200).json({
        success: true,
        massage : 'SUCCESS',
    })
}
exports.logout = (req,res)=>{
    res.send("LOG OUT")
}
