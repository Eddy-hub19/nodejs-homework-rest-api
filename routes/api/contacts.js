const express = require("express")

const ctrl = require("../../controllers/contacts")

const {validateBody} = require("../../middlewares")

const shemas = require("../../shemas/contacts")

const router = express.Router()

router.get("/", ctrl.getAll)

// router.get("/:id", ctrl.getById)

router.post("/", validateBody(shemas.addShema), ctrl.add)

// router.put("/:id", validateBody(shemas.addShema), ctrl.updateById)

// router.delete("/:id", ctrl.deleteById)

// router.post("api/contacts")


module.exports = router
