// MONGO-DB
// Makato
// rs3ISRes7zMzPaXD

const mongoose = require("mongoose")

const DB_HOST =
    "mongodb+srv://Makato:rs3ISRes7zMzPaXD@cluster0.qkzzuvd.mongodb.net/contacts_reader?retryWrites=true&w=majority"

mongoose.set('strictQuery', true)

mongoose
    .connect(DB_HOST)
    .then(() => console.log("Database connect success"))
    .catch((error) => console.log(error.message))
