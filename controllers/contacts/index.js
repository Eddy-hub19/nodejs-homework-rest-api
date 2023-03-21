const ctrlWrapper = require("../../helpers/ctrlWrapper")

const listContacts = require("./listContacts")
const getContactById = require("./getContactById")
const addContact = require("./addContact")
const removeContact = require("./removeContact")
const updateContact = require("./updateContact")
const updateFavorite = require("./updateFavorite")

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    updateFavorite: ctrlWrapper(updateFavorite),
    removeContact: ctrlWrapper(removeContact),
}
