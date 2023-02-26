const express = require("express")

const Joi = require("joi")

const contacts = require("../../models/db/contacts.js")

const { HttpError } = require("../../helpers")

const contacts = require('../../models/contacts')

const router = express.Router()

const addShema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    phone: Joi.number().min(11).artifact("over"),
})

router.get("/", async (req, res, next) => {
    try {
        const result = await contacts.listContacts()
        res.json(result)
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await contacts.getContactById(id)
        if (!result) {
            throw HttpError(404, "Not found")
        }
        res.json(result)
    } catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { error } = addShema.validate(req.body)
        if (error) {
            throw HttpError(400, error.message)
        }
        const result = await contacts.addContact(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await contacts.removeContact(id)
        if (!result) {
            throw HttpError(404, "Not found")
        }
        res.json({
            message: "contact deleted",
        })
    } catch (error) {
        next(error)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { error } = addShema.validate(req.body)
        const { id } = req.params
        const result = await contacts.updateContact(id, req.body)
        if (error) {
            throw HttpError(404, "missing fields")
        }
        res.json(result)
    } catch (error) {
        next(error)
    }
})

module.exports = router
