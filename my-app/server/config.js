const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    host: 'box5389.bluehost.com',
    port: 25,
    secure: true,
    service: 'gmail',
    auth: {
    user: process.env.email,   //email address to send contact form info from
    pass: process.env.password  //gmail password

    }
});

module.exports = transporter;