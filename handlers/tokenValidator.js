const jwt = require('jsonwebtoken');

function tokenValidator(req,res,next){
    const token = req.headers['x-access-token'];
    if(!token){
        res.status(404).json({auth: false, token: null});
    } 
    const decoded = jwt.verify(token,process.env.SECRET);    
    req.userId = decoded.id;
    next();
}

module.exports = tokenValidator;