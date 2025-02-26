const { HttpError, sendEmail } = require("../../helpers")
const { User } = require("../../models/user")

const { BASE_URL } = process.env

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        throw HttpError(400, "Verification email sent")
    }
    if (user.verify) {
        throw HttpError(401, "Verification has already been passed")
    }

    const verifyEEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}"> Click verify email </a>`,
    }
    await sendEmail(verifyEEmail)

    res.json({
        message: "Verify email send success",
    })
}

module.exports = resendVerifyEmail
