const express = require("express")

const ctrl = require("../../controllers/contacts")

const { validateBody, isValidId } = require("../../middlewares")

const shemas = require("../../shemas/contacts")

const router = express.Router()

router.get("/", ctrl.getAll)

router.get("/:id", isValidId, ctrl.getById)

router.post("/", validateBody(shemas.addShema), ctrl.add)

router.put("/:id", isValidId, validateBody(shemas.addShema), ctrl.updateById)

router.delete("/:id", isValidId, ctrl.deleteById)

router.patch("/:id/favorite", isValidId, validateBody(shemas.updateFavoriteShema), ctrl.updateFavorite)

module.exports = router
