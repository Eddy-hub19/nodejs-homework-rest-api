const { Contact } = require("../../models/contact")

const { HttpError } = require("../../helpers")

const addContact = async (req, res) => {
  const { contactId } = req.params
  const result = await Contact.find(contactId)
  if (!result) {
      throw HttpError(404, "Not found")
  }
  res.json(result)
}

module.exports = addContact