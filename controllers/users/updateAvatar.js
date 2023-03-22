const fs = require("fs/promises")
const path = require("path")
const { User } = require("../../models/user")
const Jimp = require("jimp")

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

const sizeAvatar = async (path) => {
    const avatar = await Jimp.read(path)
    avatar.resize(250, 250)
    await avatar.writeAsync(path)
}

const updateAvatar = async (req, res) => {
    const { _id } = req.user
    const { path: tempUpload, originalname } = req.file
    const filename = `${_id}_${originalname}`
    const resultUpload = path.join(avatarsDir, filename)
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join("public", "avatars", filename)
    await User.findByIdAndUpdate(_id, { avatarURL })
    sizeAvatar(avatarURL)
    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar
