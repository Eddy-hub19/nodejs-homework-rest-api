const { Schema, model } = require("mongoose")
const Joi = require("joi")

const { handleMongooseError} = require("../helpers")

const phoneRegexp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/

const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

const contactShema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for contact"],
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
    },
    { versionKey: false, timestamps: true }
)

contactShema.post("save", handleMongooseError, (data)=> {
    console.log('hello', data);
})

const addShema = Joi.object({
    name: Joi.string().pattern(nameRegexp).min(3).max(30).required(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
    phone: Joi.string().pattern(phoneRegexp).required(),
    favorite: Joi.bool(),
})

const updateFavoriteShema = Joi.object({
    favorite: Joi.boolean().required(),
})

const schemas = {
    addShema,
    updateFavoriteShema,
}

const Contact = model("contact", contactShema)

module.exports = {
    Contact,
    schemas,
}
