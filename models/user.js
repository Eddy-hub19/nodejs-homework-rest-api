const { Schema, model } = require("mongoose")
const Joi = require("joi")

const { handleMongooseError } = require("../helpers")

const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            match: emailRegexp,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            minlength: 6,
            required: true,
        },
        token: {
            type: String,
            default: "",
        },
        avatarURL: {
            type: String,
            required: true,
        },
        verify: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
            required: [true, "Verify token is required"],
        },
    },
    { versionKey: false, timestamps: true }
)

userSchema.post("save", handleMongooseError, () => {
    console.log("ç≈")
})

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const emailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
    emailSchema,
}

const User = model("user", userSchema)

module.exports = {
    User,
    schemas,
}
