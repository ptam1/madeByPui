const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    host: 'box5389.bluehost.com',
    port: 465,
    secure: true,
    auth: {
    user: process.env.email,   //email address to send contact form info from
    pass: process.env.password  //gmail password

    }
});

transporter.verify((err, success) => {
    if (err) console.error(err);
    console.log('Your config is correct');
});

console.log(transporter.options.host);

module.exports = transporter;