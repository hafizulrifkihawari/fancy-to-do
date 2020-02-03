function clientErrorHandler (err, req, res, next){
    if(err.message.length > 0){
        if(err.name == 'SequelizeDatabaseError'){
            next(err)
        } else {
            res
                .status(err.statusCode || 400)
                .json(err.message.split('\n'))
        }
    } else {
        next(err)
    }
}

function serverErrorHandler(err, req, res, next){
    res.status(500).json(err.message)
}

module.exports = { clientErrorHandler, serverErrorHandler }