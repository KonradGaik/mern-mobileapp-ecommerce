function errorHandler(err,req,res,next){
    if(err.name === 'UnauthorizatedError'){
       return res.status(500).json({message: "User is not authorizated"})
    }
    if(err.name === 'ValidationError'){
       return res.status(500).json({message: err})
    }
    return res.status(500).json({message: err});
}