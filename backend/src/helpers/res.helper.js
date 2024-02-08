
const ResHelper = {
    send: (res, statusCode, message, data) => {
        res.statusCode = statusCode;
        res.statusMessage = message;
        return res.send(data);
    }
}

module.exports = {
    ResHelper
}