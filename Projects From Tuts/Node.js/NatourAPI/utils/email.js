const nodemailer = require('nodemailer');

const sendEmail = async options => {
    //create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS,
        },
    });
    //define options
    const mailOptions = {
        from: 'test <test@example.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
        //html
    };
    // send email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
