const express = require("express")

const ctrl = require("../../controllers/contacts")

const { validateBody, isValidId } = require("../../middlewares")

const { schemas } = require("../../models/contact")

const router = express.Router()

router.get("/", ctrl.listContacts)

router.get("/:id", isValidId, ctrl.getContactById)

router.post("/", isValidId, validateBody(schemas.addShema), ctrl.addContact)

router.put("/:id", isValidId, validateBody(schemas.addShema), ctrl.updateContact)

router.patch("/:id/favorite", isValidId, validateBody(schemas.addShema), ctrl.updateFavorite)

router.delete("/:id", isValidId, ctrl.removeContact)

module.exports = router
