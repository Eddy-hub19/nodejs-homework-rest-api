const { HttpError } = require("../../helpers")
const { User } = require("../../models/user")

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params
    const user = await User.findOne({ verificationToken })
    if (!user) {
        throw HttpError(401, "Email not found")
    }
    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: "" })

    res.json({
        message: "Email verify success",
    })
}

module.exports = verifyEmail
