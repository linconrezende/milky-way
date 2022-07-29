
const ErrorHandler = (error, req, res) => {
    res.status(500).send({
        status: "ERROR",
        error: error,
        message: error.message,
        stack: error.stack
    });
}

module.exports = {
    ErrorHandler
}