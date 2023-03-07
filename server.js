const app = require("./app")
const mongoose = require("mongoose")

const DB_HOST =
    "mongodb+srv://Makato:rs3ISRes7zMzPaXD@cluster0.qkzzuvd.mongodb.net/contacts_reader?retryWrites=true&w=majority"

mongoose.set("strictQuery", true)

mongoose
    .connect(DB_HOST)
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => {
        console.log(error.message)
        process.exit(1)
    })
