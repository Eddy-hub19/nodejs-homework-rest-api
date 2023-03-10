const Contact = require("..//models/contact")

// const { HttpError } = require("../helpers")
const { ctrlWrapper } = require("./ctrlWrapper.js")

const getAll = async (req, res) => {
    const result = await Contact.find()
    res.json(result)
    console.log(result)
}

// const getById = async (req, res) => {
//     const { id } = req.params
//     const result = await contacts.getContactById(id)
//     res.json(result)
// }

const add = async (req, res) => {
    const result = await Contact.create(req.body)
    res.status(201).json(result)
}

// const updateById = async (req, res) => {
//     const { id } = req.params
//     const result = await contacts.updateContact(id)
//     if (!result) {
//         throw HttpError(404, "Not found")
//     }
//     res.json({
//         message: "contact deleted",
//     })
// }

// const deleteById = async (req, res) => {
//     const { id } = req.params
//     const result = await contacts.removeContact(id, req.body)
//     if (!result) {
//         throw HttpError(404, "Not found")
//     }
//     res.json({
//         message: "Delete success",
//     })
// }

// const updateStatusContact(coontactId, body) {
//     const { id } = req.params
//         const result = await contacts.removeContact(id, req.body)
//         if (!result) {
//             throw HttpError(404, "Not found")
//         }
//         res.json({
//             message: "Delete success",
//         })
// }

module.exports = {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    // updateById: ctrlWrapper(updateById),
    // deleteById: ctrlWrapper(deleteById),
}
