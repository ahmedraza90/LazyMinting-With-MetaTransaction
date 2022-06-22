class BaseError extends Error {
    constructor(message, statusCode,errors=null) {
        super()
        this.statusCode = statusCode
        this.message=message;
        if(errors) this.errors=errors

    }
}

module.exports={BaseError}
