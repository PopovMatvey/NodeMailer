require('dotenv').config();
const nodeMailer = require('nodemailer')

const serviseMail = 'gmail';
const mailFromSent = 'matyha550@gmail.com';
const mailToSent = 'matyha550@gmail.com';
const subjectLetter = 'Письмо отправленое node.js';
const textLetter = 'Здарова!';

const transporter = nodeMailer.createTransport(
    {
        service: serviseMail,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    })

const mailOptions = {
    from: mailFromSent,
    to: mailToSent,
    subject: subjectLetter,
    text: textLetter,
}

transporter.sendMail(
    mailOptions,
    (error) => {
        if (error !== null) {
            console.log(error);
        } else {
            console.log('Message has been sent');
        }
    }
)