const Joi = require("joi")

const addShema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    phone: Joi.number().min(11).artifact("over"),
})

module.exports = {
    addShema,
}
