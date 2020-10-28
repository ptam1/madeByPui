const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: { secureProtocol: "TLSv1_method" },
    auth: {
    user: process.env.email,   //email address to send contact form info from
    pass: process.env.password  //gmail password

    }
}));

transporter.verify((err, success) => {
    if (err) console.error(err);
    console.log('Your config is correct');
});

console.log(transporter.options.host);

module.exports = transporter;