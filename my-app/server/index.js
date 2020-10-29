const express = require("express");
const app = express();
const path = require('path');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());

const PORT = process.env.PORT || 3030;

//Route Specifications
app.use(express.static(buildPath));
app.use('/about', express.static(buildPath));
app.use('/services', express.static(buildPath));
app.use('/portfolio', express.static(buildPath));
app.use('/contact', express.static(buildPath));


app.post('/send', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);
        
    try {
        const mailOptions = {
            from: req.body.email,
            to: process.env.email,
            subject: 'Wesbite Inquiry',
            html:
                '<br /><h2> Name: </h2>' + req.body.name +
                '<br /><h2> Email Address: </h2>'  + req.body.email +
                '<br /><h2> Inquiry: </h2>'  + req.body.message
            }

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Please resend your form.'
                });
            }
            else {
                res.send({
                    success: true,
                    message: 'Thanks for your inquiry. I will respond back as soon as possible.'
                });
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Please resend your form.'
        });
    }
});

app.listen(PORT, () => {
    console.log('Server is listening on port' + ' ' + PORT);
});