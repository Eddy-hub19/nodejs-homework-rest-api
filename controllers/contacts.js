const Contact = require("../models/contact")

const { HttpError } = require("../helpers")
const { ctrlWrapper } = require("./ctrlWrapper.js")

const getAll = async (req, res) => {
    const result = await Contact.find()
    res.json(result)
    console.log(res.json(result))
}

const add = async (req, res) => {
    const result = await Contact.create(req.body)
    res.status(201).json(result)
}

const getById = async (req, res) => {
    const { contactId } = req.params
    const result = await Contact.findById(contactId)
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
}

const updateById = async (req, res) => {
    const { contactId } = req.params
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
}

const updateFavorite = async (req, res) => {
    const { id } = req.params
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
}

const deleteById = async (req, res) => {
    const { contactId } = req.params
    const result = await Contact.findByIdAndRemove(contactId)
    if (!result) {
        throw HttpError(404, "Not found")
    }
    res.json({
        message: "Delete success",
    })
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    add: ctrlWrapper(add),
    getById: ctrlWrapper(getById),
    updateById: ctrlWrapper(updateById),
    updateFavorite,
    deleteById: ctrlWrapper(deleteById),
}
