const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST, 
    port: parseInt(process.env.MAIL_PORT), 
    secure: true, // false para STARTTLS en puerto 587
    auth: {
        user: process.env.MAIL_USERNAME, 
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false, 
    },
    logger: false, 
    debug: true 
});

const sendRecoveryEmail = async (email, code) => {
    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: 'Password Recovery Code',
        text: `Your password recovery code is: ${code}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Recovery email sent to: ${email}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send recovery email.');
    }
};

module.exports = { sendRecoveryEmail };
