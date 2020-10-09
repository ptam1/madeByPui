const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.email,   //email address to send contact form info from
    pass: process.env.password  //gmail password

    }
});

module.exports = transporter;