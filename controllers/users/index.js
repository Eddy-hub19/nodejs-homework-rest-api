const { ctrlWrapper } = require("../../helpers")

const register = require("./register")
const login = require("./login")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const updateAvatar = require("./updateAvatar")
const verifyEmail = require("./verifyEmail")
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateAvatar: ctrlWrapper(updateAvatar),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
}
