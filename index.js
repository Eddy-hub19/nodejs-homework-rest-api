const sgMail = require("@sendgrid/mail")
require("dotenv").config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const email = {
    to: "sekaneduard@gmail.com",
    from: "esekan2001@gmail.com",
    subject: "Test email",
    html: "<p><strong>Test emaik</strong> from localhost:3000</p>",
}

sgMail
    .send(email)
    .then(() => console.log("Email send success"))
    .then((error) => console.log(error.message))
