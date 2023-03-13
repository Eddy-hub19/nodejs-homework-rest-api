const { isValididObjectId } = require("mongoose")

const { HttpError } = require("../helpers")

const isValidId = (req, res, next) => {
    const { contactId } = req.params
    if (!isValididObjectId(contactId)) {
        next(HttpError(400, `${contactId} is not valid id`))
    }
}

module.exports = isValidId
